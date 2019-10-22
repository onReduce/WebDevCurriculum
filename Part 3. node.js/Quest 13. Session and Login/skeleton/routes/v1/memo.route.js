const express = require('express');
const controller = require('../../controllers/v1/memo.controller');
const router = express.Router();

router
	.route('/')
	.get((req, res, next) => controller.getAll(req, res, next))
	.post((req, res, next) => controller.post(req, res, next));

router
	.route('/:id')
	.put((req, res, next) => controller.put(req, res, next))
	.delete((req, res, next) => controller.remove(req, res, next));

module.exports = router;
