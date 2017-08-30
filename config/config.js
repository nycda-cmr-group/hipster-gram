const dotenv = require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    multipleStatements: true,
    define: {
      underscored: true
    },
  },
}