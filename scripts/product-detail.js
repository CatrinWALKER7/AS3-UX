//go to product details from product page


const products = {
    victoria: {
      name: "The Victoria Bag",
      price: 479,
      image: "../images/victoria bag.png",
      description: "Height 21cm, Width 27cm, Depth 10 cm",
      imageone: "../images/victoria-angle-1.png",
      imagetwo: "../images/victoria-angle-2.png",
      imagethree: "../images/victoria-angle-3.png",
      quantity: 1,
      model: "../images/Victoria with model.png",
    },
  
    miami: {
      name: "The Miami Bag",
      price: 399,
      image: "../images/The Miami.png",
      description: "Height 25cm <br> Width 30cm <br> Depth 12 cm",
      imageone: "../images/sideAngleMiami.png",
      imagetwo: "../images/bagWstrap.png",
      imagethree: "../images/womanw:miami.png",
      quantity: 1,
      model: "../images/womanw:miami.png",
    }
};

const params = new URLSearchParams(window.location.search);
const productID = params.get("product");
const selectedProduct = products[productID];

if (selectedProduct) {

    document.getElementById("product-name").textContent = selectedProduct.name;

    document.getElementById("product-price").textContent = "$ " + selectedProduct.price + ".00 AUD";

    document.getElementById("main-image").src = selectedProduct.image;

    //document.getElementById("product-description").textContent = selectedProduct.description;

    document.getElementById("slide-one").src = selectedProduct.imageone;

    document.getElementById("slide-two").src = selectedProduct.imagetwo;

    document.getElementById("slide-three").src = selectedProduct.imagethree;

    document.getElementById("bag-on-model").src = selectedProduct.model
}



