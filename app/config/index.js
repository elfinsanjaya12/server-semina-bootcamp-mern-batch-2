const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb : process.env.URL_MONGODB_DEV,
};