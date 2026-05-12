const products = {
    victoria: {
      name: "The Victoria Bag",
      price: "$479.00 AUD",
      image: "../images/victoria bag.png",
      description: "Height 21cm, Width 27cm, Depth 10 cm",
    },
  
    miami: {
      name: "The Miami Bag",
      price: "$399.00 AUD",
      image: "../images/The Miami.png",
      description: "Height 25cm <br> Width 30cm <br> Depth 12 cm"
    }
  };

const params = new URLSearchParams(window.location.search);

const productID = params.get("product");

const selectedProduct = products[productID];

if (selectedProduct) {

  document.getElementById("product-name").textContent =
    selectedProduct.name;

  document.getElementById("product-price").textContent =
    selectedProduct.price;

  document.getElementById("main-image").src =
    selectedProduct.image;

  document.getElementById("product-description").textContent =
    selectedProduct.description;
}