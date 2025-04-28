import express from 'express';
import cors from 'cors';  // Import CORS

import bodyParser from 'body-parser';
import routes from './index.js'; // Import the routes from the routes folder


const app = express();
const PORT = 3000;

// Enable CORS for requests from port 5500 (You can configure specific origins)
app.use(cors({
    origin: 'http://localhost:5500',  // Allow requests from this origin (port 5500)
    methods: ['GET', 'POST'],         // Allowed methods
  }));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Use the imported routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
