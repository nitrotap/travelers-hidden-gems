const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'comment_text',
        'user_id',
        'created_at'
      ],
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(commentData => {
        if (!commentData) {
          res.status(404).json({ message: 'No comment found under that id!' });
          return;
        }
        res.json(commentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    // expects {body: "comment text goes here", post_id: 1, user_id: 1, }
    Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({
                    message: 'There is no comment found with that id!'
                });
                return;
            }
            res.json(commentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(commentData => {
            if (!commentData) {
                res.status(404).json({
                    message: 'No comment with that id found!'
                });
                return;
            }
            res.json(commentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;