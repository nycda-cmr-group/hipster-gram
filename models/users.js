'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    email_username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};