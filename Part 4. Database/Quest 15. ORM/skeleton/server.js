require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const indexRouter = require('./routes');
const v1Router = require('./routes/v1');
const { sequelize } = require('./models');
const app = express();
sequelize.sync();

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
