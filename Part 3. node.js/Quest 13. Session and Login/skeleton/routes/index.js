const express = require('express');
const controller = require('../controllers/index.controller');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth.isLoggedIn, controller.index);

module.exports = router;
