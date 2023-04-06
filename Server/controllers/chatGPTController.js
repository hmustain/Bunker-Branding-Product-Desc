// Load dotenv module and configure it
require('dotenv').config();
const API_KEY = process.env.CHATGPT_API_KEY

const router = require("express").Router();
const axios = require("axios");


console.log("Api_key is", API_KEY);
// console.log("process.env", process.env);

const generateDescription = async (product) => {
  console.log("Inside generateDescription function");
  try {
    console.log(API_KEY);
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Generate a detailed product description for a ${product.category} named ${product.name}.\n\nInclude the following details:\n\nPRODUCT DETAILS:\n- Vendor: ${product.vendor}\n- Material: ${product.material}\n- Washing Instructions: ${product.washingInstructions}\n- Shipping Info: ${product.shippingInfo}\n- Additional Info: ${product.additionalInfo}`,
        max_tokens: 300,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log("Request payload:", {
      prompt: `Generate a product description for a ${product.category} named ${product.name} that ${product.description}.`,
      max_tokens: 150,
      n: 1,
      stop: ".",
    });
    console.log("Request headers:", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    });
    console.log("Response data:", response.data);
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    return "";
  }
};

router.post("/generate-description", async (req, res) => {
  console.log("Inside generate-description route handler");
  const product = req.body;
  try {
    const description = await generateDescription(product);
    res.json({ description });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = {
  generateDescription,
  router,
};
