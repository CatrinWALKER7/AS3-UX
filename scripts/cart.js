const closeButton = document.querySelector ('.close-slide-in');
const body = document.body;

const buttonAdd = document.getElementById ('add-to-cart');
const cartCount = document.querySelector('.cart-and-counter span');

const itemList = document.querySelector('.item-list')


//saved to local storage cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = cart.length;

//function for opening cart
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
    
    //add product into cart array 
    cart.push(selectedProduct);

    console.log (cart);

    //change button text
    buttonAdd.textContent = "Added";

    //open cart 
    showCart()

    //changing counter
    cartCount.textContent=cart.length

    //save cart 
    localStorage.setItem('cart', JSON.stringify(cart));

})

//adding info to cart slide in 

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];


    const itemList = document.getElementById("item-list");
    let html = "";

    cart.forEach((item,index) => {
        html += 
       `<div class="item" data-index="${index}">
            <div class="cart-item-image">
                <img src=${item.image}>
            </div>

            <div class="cart-item-name">
                <p>${item.name}</p>
            </div>

            <div class="cart-item-price">
                <p id="price-${index}">$${item.price * item.quantity}</p>
            </div>

            <div class="cart-items-quantity">
                <span class="minus" data-index="${index}">-</span>
                <span id="qty-${index}">${item.quantity}</span>
                <span class="plus" data-index=${index}>+</span>
            </div>
        </div>`
    });
    itemList.innerHTML = html;
    attachQuantityListeners();
}


function attachQuantityListeners() {
    document.querySelectorAll('.plus').forEach (btn => {
        btn.addEventListener ('click', () => {
            const index = btn.dataset.index; 
            cart[index].quantity += 1;
            updateCart ();
        });
    });

    document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1); // Remove item if quantity hits 0
            }
            updateCart();
        });
    });
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.textContent = cart.length;
    loadCart();

}



