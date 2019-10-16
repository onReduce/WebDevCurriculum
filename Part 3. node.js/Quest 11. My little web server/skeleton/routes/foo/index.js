const controller = require('./foo.controller.js');

module.exports = {
	GET: controller.read,
	POST: controller.create,
};
