const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
  static bkmrk(body, models) {
    return models.Bookmark.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
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
          [sequelize.literal('(SELECT COUNT(*) FROM bookmark WHERE post.id = bookmark.post_id)'),'bookmark_count']
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: true,
        }, 
        latitude: {
            type: DataTypes.FLOAT(10, 6),
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT(10, 6),
            allowNull: false
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "map-pin"
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
              }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'post',
        underscored: true
    }
);

module.exports = Post;
