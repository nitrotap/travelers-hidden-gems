const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Bookmark = require('./Bookmark')

// associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Bookmark.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

Bookmark.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
})

User.hasMany(Bookmark, {
  foreignKey: 'user_id'
})

Post.hasMany(Bookmark, {
  foreignKey: 'post_id'
})

User.belongsToMany(Post, {
  through: Bookmark,
  as: 'bookmarked_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Bookmark,
  as: 'bookmarked_posts',
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Bookmark };