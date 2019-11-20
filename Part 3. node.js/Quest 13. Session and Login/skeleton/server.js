require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const indexRouter = require('./routes');
const v1Router = require('./routes/v1');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('knowre'));
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: 'knowre',
		cookie: {
			maxAge: 1000 * 60 * 5, // 쿠키 유효기간 5분
			httpOnly: true,
			secure: false
		}
	})
);

app.use('/', indexRouter);
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
	console.info('Server started!');
});
