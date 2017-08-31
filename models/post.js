'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    image_loc: DataTypes.STRING,
    desc: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

        // checking to determine contents of models data
        console.log(models);

        // this is a 1 to 1 relationship where a post has 1 user
        post.belongsTo(models.users);
      }
    }
  });
  return post;
};
