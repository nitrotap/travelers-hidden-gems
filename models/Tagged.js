const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tagged extends Model {}

Tagged.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tagged'
  }
);

module.exports = Tagged;
