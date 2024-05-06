import express from 'express';


const app = express();

app.get("tweets", (req, res) => {
    res.writeHead(200);
    res.end('tweets data');
});

app.listen(8000, () => {
    console.log(`server running on http://localhost:${8000}`);
})