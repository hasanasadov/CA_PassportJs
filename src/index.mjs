import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import './config/db.mjs';
import './config/auth-strategy.mjs';

const app = express();

import authRouter from './routes/auth.mjs';
import reservationRouter from './routes/reservations.mjs';
import usersRouter from './routes/users.mjs';
import passport from 'passport';

app.use(express.json());
app.use(cookieParser());
app.use(expressSession({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.use('/reservations', reservationRouter);

app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:3000');
});

