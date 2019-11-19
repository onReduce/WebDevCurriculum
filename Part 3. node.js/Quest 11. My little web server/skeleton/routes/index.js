module.exports = {
	'/': {
		GET: (req, res) => res.end('Hello World!')
	},
	'/foo': require('./foo'),
	'*': (req, res) => res.end('404 NOT FOUND')
};
