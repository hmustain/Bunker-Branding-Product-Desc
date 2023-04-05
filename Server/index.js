const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chatGPT = require("./controllers/chatGPTController");

// Load environment variables
dotenv.config();

// Create express app
const app = express();

app.post("/generate-description", async (req, res) => {
  const product = req.body;
  const description = await chatGPT.generateDescription(product);
  res.send({ description });
});

// Enable CORS
app.use(cors());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
