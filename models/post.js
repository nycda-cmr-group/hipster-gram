'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    image_loc: DataTypes.STRING,
    desc: DataTypes.STRING,
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {

        // checking to determine contents of models data
        console.log(models);

        // this is a 1 to 1 relationship where a post has 1 user
      // post.belongsTo(models.users, {foreignKey: 'user_id'});

      }
    }
  });
  // extracted sync to separate file test_db.js
  // post.sync({alter: true});
  return post;
};
