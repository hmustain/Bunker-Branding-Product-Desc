require('dotenv').config();
const express = require("express");
const path = require('path');
const cors = require("cors");
const chatGPT = require("./controllers/chatGPTController");

// Create express app
const app = express();

// add middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '/client/build/images')));

if (process.env.NODE_ENV === 'production') {
 app.use(express.static(path.join(__dirname, '/client/build')));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

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
