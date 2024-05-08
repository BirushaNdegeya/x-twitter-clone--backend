import { Router } from "express";
import { 
    getAllTwitters, 
    getTweetByName, 
    postTweet 
} from "../controllers/tweets.controller.js";


const tweetsRoute = Router();

tweetsRoute.post('/', postTweet)
tweetsRoute.get('/:nickname', getTweetByName);
tweetsRoute.get('/', getAllTwitters);

export default tweetsRoute;