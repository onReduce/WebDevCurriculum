const url = require('url');
const qs = require('querystring');

const read = (req, res) => {
	const { query } = url.parse(req.url);
	const { bar } = qs.parse(query);
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.end(`Hello, ${bar}`);
};

const create = (req, res) => {
	let body = '';
	req.on('data', chunk => (body += chunk));
	return req.on('end', () => {
		const { bar } = JSON.parse(body);
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.end(`Hello, ${bar}`);
	});
};

module.exports = {
	read,
	create
};
