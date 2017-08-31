'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email_username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    // extracted sync to separate file test_db.js
  // user.sync({alter: true});
  return user;
};