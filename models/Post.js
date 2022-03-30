const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

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
        location: {
            type: DataType.STRING,
            allowNull: false
        },
        private_post: {
            type: DataType.BOOLEAN,
            allowNull: false,
            default: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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