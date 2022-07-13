const express = require('express');
const router = express();
const { signinCms } = require('./controller');

router.post('/auth/signin', signinCms);

module.exports = router;
