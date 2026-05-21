const closeButton = document.querySelector ('.close-slide-in');
const body = document.body;

const buttonAdd = document.getElementById ('add-to-cart');
const cartCount = document.querySelector('.cart-and-counter span');


//cart array
let cart = [];

//cart open
function showCart(){
    body.classList.add('show-cart');
}

//cart close
closeButton.addEventListener ('click', () => {
    body.classList.remove ('show-cart');
    buttonAdd.textContent = "Add to Cart";
});

//adding to cart 
buttonAdd.addEventListener('click', () => {
    
    cart.push(selectedProduct);

    console.log (cart);

    buttonAdd.textContent = "Added";

    document.body.classList.add('show-cart');


    //changing counter
    cartCount.textContent=cart.length

    localStorage.setItem('cart', JSON.stringify(cart));

})

