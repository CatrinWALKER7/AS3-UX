//go to product details from product page

const products = {
    victoria: {
      name: "The Victoria Bag",
      price: "$479.00 AUD",
      image: "../images/victoria bag.png",
      description: "Height 21cm, Width 27cm, Depth 10 cm",
      imageone: "../images/victoria-angle-1.png",
      imagetwo: "../images/victoria-angle-2.png",
      imagethree: "../images/victoria-angle-3.png",

    },
  
    miami: {
      name: "The Miami Bag",
      price: "$399.00 AUD",
      image: "../images/The Miami.png",
      description: "Height 25cm <br> Width 30cm <br> Depth 12 cm",
      imageone: "../images/victoria-angle-1.png",
      imagetwo: "../images/victoria-angle-2.png",
      imagethree: "../images/victoria-angle-3.png",
    }
  };

  const params = new URLSearchParams(window.location.search);

const productID = params.get("product");

const selectedProduct = products[productID];

if (selectedProduct) {

  document.getElementById("product-name").textContent = selectedProduct.name;

  document.getElementById("product-price").textContent = selectedProduct.price;

  document.getElementById("main-image").src = selectedProduct.image;

  //document.getElementById("product-description").textContent = selectedProduct.description;

  document.getElementById("slide-one").src = selectedProduct.imageone;

  document.getElementById("slide-two").src = selectedProduct.imagetwo;

  document.getElementById("slide-three").src = selectedProduct.imagethree;
}

//cart slide in 

const button = document.getElementById("add-to-cart");

if (button) {
  button.addEventListener("click", function () {

    localStorage.setItem("cartProduct", productID);

    button.textContent = "Added";
  });
}

const cartCounter = document.querySelector('.cart-and-counter');

const body = document.body;
let produtListHtml = document.querySelector('.product-list');
let productList = [];

const closeButton = document.querySelector('.close-slide-in');


//show and hide cart 
cartCounter.addEventListener('click', () => {
  body.classList.add('show-cart');
});


closeButton.addEventListener('click', () => {
  body.classList.remove('show-cart');
});


