const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
	res.send('/memo GET');
});
router.post('/', (req, res) => {
	res.send('/memo POST');
});

module.exports = router;
