const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

fs.readdirSync(__dirname)
	.filter(file => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-9) === '.route.js')
	.forEach(routeFile => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`)));

module.exports = router;
