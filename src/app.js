import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let user = { username: "", avatar: "" };
const tweets = [];

app.post('/sign-up', (req, res) => {
    if (req.body.username === '' || req.body.avatar === '' || typeof(req.body.username) === 'undefined' || typeof(req.body.avatar) === 'undefined') {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        user = req.body;
        res.status(201).send('OK');
    }
});

app.post('/tweets', (req, res) => {
    if (req.header('User') === '' || req.body.tweet === '' || typeof(req.header('User')) === 'undefined' || typeof(req.body.tweet) === 'undefined') {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        tweets.unshift({ ...req.body, username: req.header('User'), avatar: user.avatar });
        res.status(201).send('OK');
    }
});

app.get('/tweets', (req, res) => {
    if (tweets.length < 10) res.send(tweets);
    else res.send(tweets.slice(0, 10));
});

app.get('/tweets/:userName', (req, res) => {
    const userTweeets = tweets.filter((tweet) => {
        if (tweet.username === req.params.userName) return tweet;
    });
    res.send(userTweeets);
})

app.listen(5000, () => {
    console.log('-------------------------------------');
    console.log('| Running at http://localhost:5000/ |');
    console.log('-------------------------------------');
});