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
