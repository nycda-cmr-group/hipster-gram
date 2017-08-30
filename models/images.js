const Sequelize = require('sequelize');
const Sequelize = require('../db');

const Post = sequelize.define('post', {
	image_loc: {type: Sequelize.STRING, allowNull: false},
	user_id: {type: Sequelize.INTEGER(11), allowNull: false},
	desc: {type: sequelize.STRING(150), allowNull: true}
})



// CREATE TABLE `comments` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `post_id` int(11) unsigned DEFAULT NULL,
//   `comments` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `comments-posts-key` (`post_id`),
//   CONSTRAINT `comments-posts-key` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


// CREATE TABLE `posts` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `image_loc` varchar(255) DEFAULT NULL,
//   `desc` varchar(150) DEFAULT NULL,
//   `user_id` int(11) unsigned DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `users-posts-key` (`user_id`),
//   CONSTRAINT `users-posts-key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;



// CREATE TABLE `tags` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `tags` varchar(255) DEFAULT NULL,
//   `post_id` int(11) unsigned DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `tags-posts-key` (`post_id`),
//   CONSTRAINT `tags-posts-key` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
// CREATE TABLE `users` (
//   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//   `email_username` varchar(50) DEFAULT NULL,
//   `password` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
// Add Comment Co