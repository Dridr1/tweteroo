import express from "express";

let user;
const tweets = [];

const app = express();

app.use(express.json());

app.post('/sign-up', (req, res) => {
    user = req.body;
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    tweets.push(req.body);
    res.send('OK');
    console.log(tweets);
})

app.listen(5000, () => {
    console.log('-------------------------------------');
    console.log('| Running at http://localhost:5000/ |');
    console.log('-------------------------------------');
})