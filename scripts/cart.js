const products = {
    victoria: {
      name: "The Victoria Bag",
      price: "$479.00 AUD",
      image: "../images/victoria bag.png",
    },
  
    miami: {
      name: "The Miami Bag",
      price: "$399.00 AUD",
      image: "../images/The Miami.png",
    }
  };
  
  const cartProduct = localStorage.getItem("cartProduct");
  
  const selectedProduct = products[cartProduct];
  
  if (selectedProduct) {
  
    document.getElementById("cart-product-name").textContent =
      selectedProduct.name;
  
    document.getElementById("cart-product-price").textContent =
      selectedProduct.price;
  
    document.getElementById("cart-product-image").src =
      selectedProduct.image;
  }