require('dotenv').config();

const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cors = require('cors');
const v1Router = require('./routes/v1');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* TODO: 여기에 처리해야 할 요청의 주소별로 동작을 채워넣어 보세요..! */
app.use('/v1', v1Router);

app.use((req, res, next) => {
	next({ status: 404, stack: 'not found' });
});
app.use((err, req, res) => {
	let apiError = err;
	if (!err.status) apiError = createError(err);
	res.locals.message = apiError.message;
	res.locals.error = req.app.get('env') === 'development' ? apiError : {};
	res.status(err.status || 500).json({ message: apiError.message });
});

app.listen(process.env.PORT || 8080, () => {
	console.info('Server started!');
});
