const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const indexJs = path.basename(__filename);
fs.readdirSync(__dirname)
	.filter(file => file.indexOf('.') !== 0 && file !== indexJs && file.slice(-9) === '.route.js')
	.forEach(routeFile => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`)));

module.exports = router;
