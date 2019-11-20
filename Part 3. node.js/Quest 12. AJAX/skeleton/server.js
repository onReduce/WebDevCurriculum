require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const v1Router = require('./routes/v1');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.static('client')); // index.html
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.use('/v1', v1Router);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	res.status(err.status || 500).send(err.message || 'Server Error');
	next;
});
app.listen(process.env.PORT || 8080, () => {
	console.info('Server started !!');
});
