import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = { username: "", avatar: "" };
const tweets = [];

app.post('/sign-up', (req, res) => {
    user = req.body;
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    tweets.unshift({ ...req.body, avatar: user.avatar });
    res.send('OK');
});

app.get('/tweets', (req, res) => {
    if (tweets.length < 10) res.send(tweets);
    else res.send(tweets.slice(0, 10));
});

app.listen(5000, () => {
    console.log('-------------------------------------');
    console.log('| Running at http://localhost:5000/ |');
    console.log('-------------------------------------');
});