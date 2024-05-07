import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import tweetsRoute from './routes/tweets.route.js';

dotenv.config();

const { PORT } = process.env || 8000;

const app = express();
app.use(express.json());

app.use('/tweets', tweetsRoute);
app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})