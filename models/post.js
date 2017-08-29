'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    image_loc: DataTypes.STRING,
    desc: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return post;
};