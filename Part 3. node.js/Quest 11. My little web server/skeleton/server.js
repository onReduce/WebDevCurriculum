const http = require('http');
const url = require('url');
const routes = require('./routes');

http.createServer((req, res) => {
	// TODO: 이 곳을 채워넣으세요..!
	const { pathname } = url.parse(req.url);
	const matchFunc = (routes[pathname] && routes[pathname][req.method]) || routes['*'];
	matchFunc(req, res);
}).listen(8080, () => {
	console.info('Server started !');
});
