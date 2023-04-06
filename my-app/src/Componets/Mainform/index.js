import React, { useState } from "react";

const Form = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productVendor, setProductVendor] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [washingInstructions, setWashingInstructions] = useState("");
  const [shippingInfo, setShippingInfo] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [description, setDescription] = useState("");

  const handleGenerateDescription = async () => {
    e.preventDefault();
    const product = {
      name: productName,
      category: productType,
      description: productDetails,
    };
    const response = await fetch("/generate-description", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    setDescription(data.description);
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Product Description Generator</h1>
      <form onSubmit={handleGenerateDescription}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productType">Product Type</label>
          <input
            type="text"
            className="form-control"
            id="productType"
            name="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productVendor">Product Vendor</label>
          <input
            type="text"
            className="form-control"
            id="productVendor"
            name="productVendor"
            value={productVendor}
            onChange={(e) => setProductVendor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDetails">Product Details</label>
          <textarea
            className="form-control"
            id="productDetails"
            name="productDetails"
            value={productDetails}
            onChange={(e) => setProductDetails(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="washingInstructions">Washing Instructions</label>
          <textarea
            className="form-control"
            id="washingInstructions"
            name="washingInstructions"
            value={washingInstructions}
            onChange={(e) => setWashingInstructions(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shippingInfo">Shipping Info</label>
          <textarea
            className="form-control"
            id="shippingInfo"
            name="shippingInfo"
            value={shippingInfo}
            onChange={(e) => setShippingInfo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalInfo">Additional Info</label>
          <textarea
            className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>
        <button
          id="generate-btn"
          type="submit"
          className="btn btn-primary"
        >
          Generate Description
        </button>
      </form>
      {/* Display the generated description */}
      <div className="mt-4">
        <h2>Generated Description:</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Form;
