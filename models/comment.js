'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mssql::memory:');

module.exports = (sequelize, DataTypes) => {

  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
    }
  };

  Comment.init({
    message:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Comment',
  });

  // the defined model is the class itself
  console.log("Comment define class");
  console.log(Comment === sequelize.models.Comment);

  return Comment;
};