const url = require('url');
const qs = require('querystring');

const get = (req, res) => {
	const { query } = url.parse(req.url);
	const { bar } = qs.parse(query);
	if (!bar) return res.end('missing bar parameter / wrong content-type');
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.end(`Hello, ${bar}`);
};

const post = (req, res) => {
	let body = '';
	req.on('data', chunk => (body += chunk));
	req.on('end', () => {
		let bar = '';
		try {
			// Content-Type: application/json
			bar = JSON.parse(body).bar;
		} catch (err) {
			// Content-Type: application/x-www-form-urlencoded
			const str = body.trim().split('=');
			bar = str[0] === 'bar' ? str[1] : null;
		}
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		if (!bar) return res.end('missing bar parameter / wrong content-type');
		res.end(`Hello, ${bar}`);
	});
};

module.exports = {
	get,
	post
};
