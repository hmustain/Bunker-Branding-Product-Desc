const router = require('express').Router();
const axios = require('axios');


const API_KEY = process.env.CHATGPT_API_KEY;

const generateDescription = async (product) => {
    console.log('I am inside the generateDesciption function');
  try {
    const response = await axios.post(
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
    console.log('Response data:', response.data); // added console.log statement
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return '';
  }
};

router.post('/generate-description', async (req, res) => {
    console.log('Inside generate-description route handler');
    const product = req.body;
    const description = await generateDescription(product);
    res.json({ description });
  });
  

module.exports = {
  generateDescription,
  router
};