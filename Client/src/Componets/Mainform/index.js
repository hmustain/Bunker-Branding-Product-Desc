import React, { useState } from "react";
// import { PulseLoader } from 'react-spinners';



const Form = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productVendor, setProductVendor] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [washingInstructions, setWashingInstructions] = useState("");
  const [shippingInfo, setShippingInfo] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [description, setDescription] = useState("");
  const [generated, setGenerated] = useState();

  const handleGenerateDescription = async (e) => {
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
      // Clear input fields
  setProductName("");
  setProductType("");
  setProductVendor("");
  setProductDetails("");
  setWashingInstructions("");
  setShippingInfo("");
  setAdditionalInfo("");
  setDescription("");
  setDescription(data.description);
  setGenerated(true);
  };
  return (
    <div className="container mt-5" style={{ marginBottom: "100px"}}>
      {/* {Display PulseLoader while generating description}
      {generated && (
        <div className="form-group">
          <PulseLoader color="#007bff" loading={generated} />
          </div>
      )} */}
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
        <button id="generate-btn" type="submit" className="btn btn-primary">
          Generate Description
        </button>
      </form>
      {/* Display the generated description */}
      {generated && (
        <div className="form-group">
          <h2>Generated Description:</h2>
          <textarea
            className="form-control"
            rows={15}
            style={{ overflowY: "auto", resize: "none" }} // Add inline CSS
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Form;
