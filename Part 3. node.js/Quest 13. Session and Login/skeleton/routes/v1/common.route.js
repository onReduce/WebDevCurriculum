const express = require('express');
const controller = require('../../controllers/v1/common.controller');
const router = express.Router();

router.route('/login').post((req, res, next) => controller.login(req, res, next));
router.route('/logout').get((req, res, next) => controller.logout(req, res, next));

module.exports = router;
