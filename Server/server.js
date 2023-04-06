const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");
const chatGPT = require("./controllers/chatGPTController");

// Create express app
const app = express();

// add middleware 
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  // If in production, serve static files from the client/build folder
  app.use(express.static('client/build'));
}

// Hello World route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Generate Description route
app.post("/generate-description", async (req, res) => {
  try {
    const product = req.body;
    const description = await chatGPT.generateDescription(product);
    res.send({ description });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Enable CORS
app.use(cors());

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
