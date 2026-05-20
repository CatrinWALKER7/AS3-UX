const cartCounter = document.querySelector ('.cart-and-counter');
const closeButton = document.querySelector ('.close-slide-in');
const body = document.body;

//cart open
cartCounter.addEventListener ('click', () => {
    body.classList.add('show-cart');
});

//cart close
closeButton.addEventListener ('click', () => {
    body.classList.remove ('show-cart');
});

//adding to cart 
const buttonAdd = document.getElementById ('add-to-cart');

let cart = [];

buttonAdd.addEventListener('click', () => {
    cart.push(selectedProduct);
    console.log (cart);

    buttonAdd.textContent = "Added";
    document.body.classList.add('show-cart');

})

closeButton.addEventListener ('click', () => {
    document.body.classList.remove ('show-cart')
    buttonAdd.textContent = "Add to Cart"
})
