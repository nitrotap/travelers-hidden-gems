const Post = require('./Post');
const User = require('./User');
const Tag = require('./Tag');
const Tagged = require('./Tagged');
const Comment = require('./Comment');

// associations
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'cascade'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

Tag.hasMany(Post, {
  through: Tagged,
  as: "tags",
  foreignKey: 'post_id',
  onDelete: 'set null'
});

Post.hasMany(Tag, {
  through: Tagged,
  as: "tags",
  foreignKey: 'tag_id',
  onDelete: 'set null'
});



module.exports = { User, Post, Tag, Tagged, Comment };