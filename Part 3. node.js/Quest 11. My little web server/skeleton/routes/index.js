module.exports = {
	'*': (req, res) => res.end('Hello World!'),
	'/foo': require('./foo')
};
