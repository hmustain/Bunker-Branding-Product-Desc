const generateBtn = document.getElementById("generate-btn");
const productNameInput = document.getElementById("productName");
const productTypeInput = document.getElementById("productType");
const productVendorInput = document.getElementById("productVendor");
const productDetailsInput = document.getElementById("productDetails");
const washingInstructionsInput = document.getElementById("washingInstructions");
const shippingInfoInput = document.getElementById("shippingInfo");
const additionalInfoInput = document.getElementById("additionalInfo");
const descriptionOutput = document.getElementById("description-output");

generateBtn.addEventListener("click", async () => {
    const product = {
        name: productNameInput.value,
        category: productTypeInput.value,
        description: productDetailsInput.value,
    };
    const response = await fetch("/generate-description", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    descriptionOutput.innerHTML = data.description;
});