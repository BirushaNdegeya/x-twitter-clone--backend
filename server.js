import express from 'express';
import dotenv from 'dotenv';
import data from './data/data.js';
import { env } from 'process';

dotenv.config();

const { PORT } = env;

const app = express();

app.get("/tweets", (req, res) => {
    res.writeHead(200);
    res.end('tweets data');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${8000}`);
})