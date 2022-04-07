const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Bookmark } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
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
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', { req, posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.get('/post/:id', withAuth, (req, res) => {
  Post.findAll({
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
      },
      {
        model: Bookmark,
        where: {
          user_id: req.session.user_id
        },
        required: false,
        attributes: ['id', 'user_id', 'post_id']
      }
    ]
  })
  .then(dbPostData => {
    if(!dbPostData) {
      res.status(404).json({message: 'post with that id was not found'})
      return;
    }
    const post = dbPostData[0].get({ plain: true });
    // console.log(post)
    res.render('single-post', {
      req,
      post,
      loggedIn: req.session.loggedIn,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
  
	res.render('login');
});

module.exports = router;