import express from 'express';

const router = express.Router();

// Define a GET route for the home page
router.get('/', (req, res) => {
  res.send('Hello from the Home Page!');
});

// Define another route, for example, a POST route
router.post('/submit', (req, res) => {
    console.log("req.body is ::",req.body);
});

export default router;
