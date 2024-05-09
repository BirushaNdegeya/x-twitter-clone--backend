import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import tweetsRoute from './routes/tweets.route.js';

dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tweets', tweetsRoute);
app.use('/', userRoute);

app.listen(PORT);