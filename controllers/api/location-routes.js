const router = require('express').Router();
const { Post, Bookmark } = require('../../models');
const withAuth = require('../../utils/auth');
const Sequelize = require('sequelize');

router.get('/', (req, res) => {
  console.log('===========');
  Post.findAll({
    attributes: [
      'title',
      'latitude',
      'longitude',
    ],
  })
    .then(postData => {
      const mapData = postData.map(post => post.get({ plain: true }))
      // console.log(mapData)
      res.json(mapData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/user', (req, res) => {
  console.log('===========');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'title',
      'latitude',
      'longitude',
    ],
  })
    .then(postData => {
      const mapData = postData.map(post => post.get({ plain: true }))
      // console.log(mapData)
      res.json(mapData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/bookmarks', (req, res) => {
  console.log('===========');
  Bookmark.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'user_id',
      'post_id'
    ],
    include: [
      {
        model: Post,
        attributes: ['title', 'latitude', 'longitude'],
      }
    ]
  })
    .then(postData => {
      const mapData = postData.map(bookmark => bookmark.post.get({ plain: true }))
      // console.log(mapData)
      res.json(mapData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  console.log('===========');
  Post.findAll({
    where: {
      id: req.params.id
    },
    attributes: [
      'title',
      'latitude',
      'longitude',
    ],
  })
    .then(postData => {
      const mapData = postData.map(post => post.get({ plain: true }))
      // console.log(mapData)
      res.json(mapData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;