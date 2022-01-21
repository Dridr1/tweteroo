import express from "express";
import cors from 'cors';

let user = {
    username: "",
    avatar: ""
};

const tweets = [];

const app = express();

app.use(express.json());
app.use(cors());

app.post('/sign-up', (req, res) => {
    user = req.body;
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    tweets.unshift({...req.body, avatar: user.avatar});
    res.send('OK');
});

app.get('/tweets', (req, res) => {
    if(tweets.length < 10) res.send(tweets);
    else{
        const tweetsTemp = [...tweets];
        const lastTweets = tweetsTemp.slice(0, 10);
        res.send(lastTweets);
    }
});

app.listen(5000, () => {
    console.log('-------------------------------------');
    console.log('| Running at http://localhost:5000/ |');
    console.log('-------------------------------------');
})