const router = require('express').Router();
const { User, Post, Comment, Bookmark } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// get all posts
router.get('/', (req, res) => {
  console.log('===========');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'contents',
      'latitude',
      'longitude',
      'icon',
      'user_id',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'contents',
      'latitude',
      'longitude',
      'icon',
      'user_id',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM bookmark WHERE post.id = bookmark.post_id)'), 'bookmark_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post under that id!' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Crystal Cave', contents: 'Cool cave, awesone day trip!', latitude: 44.8333, longitude: -92.2520, icon: map-pin(currently unused), user_id: 1}
  Post.create({
    title: req.body.title,
    contents: req.body.contents,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    icon: "map-pin",
    user_id: req.session.user_id
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/bookmark', withAuth, (req, res) => {
  Post.bkmrk({ ...req.body, user_id: req.session.user_id }, { Bookmark, Comment, User })
    .then(updatedBookmarkData => res.json(updatedBookmarkData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        contents: req.body.contents,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        icon: req.body.icon,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(postData => {
            if (!postData) {
                res.status(404).json({
                    message: 'There is no post found with that id!'
                });
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(postData => {
            if (!postData) {
                res.status(404).json({
                    message: 'No post with this id found!'
                });
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;