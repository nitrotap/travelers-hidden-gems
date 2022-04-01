const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
      attributes:[
          'id',
          'title',
          'contents',
          'location',
          'user_id',
          'created_at',
          'updated_at'
      ],
          include: [{
          model: User,
          attributes:['id','username']
      },
      {
          model: Comment,
          attributes:['id', 'comment_text', 'created_at', 'updated_at'],
          order: [
            ['created_at', 'DESC']
          ],
          include: [{
              model: User,
              attributes: ['id', 'user_name']
          }]
      }
    ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }))
      res.render('homepage', { req, posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


  module.exports = router;