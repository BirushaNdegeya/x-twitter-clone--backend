import data from "../data/data.js";


export const getAllTwitters = (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

export const getTweetByName = (req, res) => {
    const nickname = req.params.nickname;
    const tweet = data.filter(t => t.nickname == nickname);
    try {
        res.status(200).json(tweet);
    } catch (error) {
        res.status(500).json({ message: error })
    }
};

export const postTweet = (req, res) => {
    const id = (Math.random() * 100000).toString('16').split('.').join('');
    try {
        if (!req.body.text) {
            throw new Error("Tweet not available");
        }
        if (req.body.text.length > 180) {
            throw new Error("Many characters");
        }
        const userPost = {
            "id": id,
            "author": "Bradley Ortiz",
            "nickname": "@bradley",
            "time": "7m",
            "avatar": "/assets/Profile-Photo.png",
            "text": req.body.text,
            "image": "https://source.unsplash.com/random/800x300",
            "reply": 0,
            "retweet": 0,
            "react": 0,
        }
        const dataInDB = [userPost, ...data];

        res.status(200).json(dataInDB);

    } catch (error) {
        res.status(500).json({ message: error });
    }
};