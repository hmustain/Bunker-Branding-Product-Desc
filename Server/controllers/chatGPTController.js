const router = require('express').Router();
require('dotenv').config();

const API_KEY = process.env.CHATGPT_API_KEY;

const generateDescription = async (product) => {
  try {
    const response = await router.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Generate a product description for a ${product.category} named ${product.name} that ${product.description}.`,
        max_tokens: 150,
        n: 1,
        stop: '.',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return '';
  }
};

router.post('/generate-description', async (req, res) => {
    const product = req.body;
    const description = await generateDescription(product);
    res.json({ description });
  });
  

module.exports = {
  generateDescription,
};