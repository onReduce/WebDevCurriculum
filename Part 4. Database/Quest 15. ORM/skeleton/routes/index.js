const express = require('express');
const controller = require('../controllers/index.controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth.isLoggin, controller.index);

module.exports = router;
