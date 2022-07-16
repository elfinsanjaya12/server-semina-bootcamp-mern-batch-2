const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.SECRET_KEY,
  jwtExpiration: '24h', // 1 minute
  jwtRefreshExpiration: 120, // 2 minutes,
  email: 'elfin@pandatech.io',
  password: 'Copyright12',
};
