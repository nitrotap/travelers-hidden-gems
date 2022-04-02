const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This place is great!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'I loved this place',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'What a cool place.',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
