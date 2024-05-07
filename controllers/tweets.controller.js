import data from "../data/data.js";

export const getAllTwitters = (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error})
    }
};

export const getTweetByName = (req, res) => {
    const nickname = req.params.nickname;
    const tweet = data.filter(t => t.nickname == nickname);
    try {
        res.status(200).json(tweet);
    } catch (error) {
        res.status(500).json({message:error})
    }
};

export const postTweet = (req, res) => {
    res.send("something");
};