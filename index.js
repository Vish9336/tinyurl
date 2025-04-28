import express from 'express';
import { nanoid } from 'nanoid';  // Import nanoid for generating unique IDs
import tinyurl from './models/tinyurl.js';

const router = express.Router();

// Define a GET route for the home pages
router.get('/', (req, res) => {
  res.send('Hello from the Home Page!');
});

// Define another route, for example, a POST route
router.post('/submit', async (req, res) => {
    console.log("req.body is ::",req.body);
    let url=req.body.url
    let shortId = nanoid(6);  // Generate a unique short ID 
    // (6 characters)
    console.log("shortId is ::",shortId);
    shortId='www.localhost:3000/'+shortId;
    let isExist= await tinyurl.findOne({
        where:{
            url:url
        }
    })
    if(isExist){
        console.log(isExist)
        return res.json(isExist.dataValues.shorturl)
    }
    else{
        tinyurl.create({
            url:url,
            shorturl:shortId
        })
        return res.json(shortId)

    }
});

export default router;
