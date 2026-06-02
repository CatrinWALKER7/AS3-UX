const closeButton = document.querySelector ('.close-slide-in');
const body = document.body;
const cartCount = document.querySelector('.cart-and-counter span');
const buttonAdd = document.getElementById('add-to-cart');

//saved to local storage cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = cart.length;

//function for opening cart
function showCart(){
    body.classList.add('show-cart');
    loadCart();
}

//cart close
closeButton.addEventListener ('click', () => {
    body.classList.remove ('show-cart');
    if (buttonAdd) buttonAdd.textContent = "Add to Cart";
});

//adding to cart 

if (buttonAdd) {
    buttonAdd.addEventListener('click', () => {
        
        const existingItem = cart.find(item => item.name === selectedProduct.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...selectedProduct,quantity:1});
        }
    
       
      
        
        localStorage.setItem('cart',JSON.stringify(cart));
        buttonAdd.textContent="Added";
        cartCount.textContent= cart.length;
        showCart();
    });
}
    


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
                <p>$${item.price * item.quantity}</p>
            </div>

            <div class="cart-items-quantity">
                <span class="minus" data-index="${index}">-</span>
                <span>${item.quantity}</span>
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
            const index = Number(btn.dataset.index); 
            cart[index].quantity += 1;
            updateCart ();
        });
    });

    document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = Number(btn.dataset.index);
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



