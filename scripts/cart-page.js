document.addEventListener('DOMContentLoaded', () => {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemList = document.getElementById('item-list');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-and-counter span');

    cartCount.textContent = cart.length;

    function renderCart() {
        let html = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            html +=
            `<div class="item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${item.image}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">
                        <p>${item.name}</p>
                    </div>
                    <div class="cart-item-price">
                        <p>$${item.price * item.quantity}</p>
                    </div>
                    <div class="cart-items-quantity">
                        <span class="minus" data-index="${index}">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-index="${index}">+</span>
                    </div>
                </div>
            </div>`;          
        });

        itemList.innerHTML = html;
        cartTotal.textContent = "$" + total;
        attachListeners();
    }

    function attachListeners() {
        document.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = Number(btn.dataset.index);
                cart[index].quantity += 1;
                saveAndRender();
            });
        });

        document.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = Number(btn.dataset.index);
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
                saveAndRender();
            });
        });
    }
    function saveAndRender() {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.length;
        renderCart();
    }

    renderCart();



//loading the form, makes form appear & takes you to form
const checkoutBtn = document.querySelector('.go-to-checkout');
const checkoutForm = document.querySelector('.checkout-form');
const submitBtn = document.querySelector ('.order-confirmation');
const confirmBtn = document.querySelector('.order-confirmation');

checkoutBtn.addEventListener('click', () => {
    checkoutForm.classList.add('active'); //add active css class onto form 
    checkoutForm.scrollIntoView({behavior: 'smooth'});
});

//confirming form entry 

confirmBtn.addEventListener ('click', () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;

    if (!name || !email || !phone || !address) {
        alert('Please make sure you have filled in all fields');
        return;
    }
    
    //clearing cart 
    cart = [];
    localStorage.removeItem('cart');
    cartCount.textContent=0;
    renderCart();
    
    //show confirmation message 
    checkoutForm.innerHTML = `
    <div class="confirmation-box">
        <h2>Order Confirmed!</h2>
        <p>Thank you ${name}, we hope you enjoy your bag!</p>
        <button onclick="window.location.href='../index.html'">Continue Shopping</button>
    </div>
`;
});


renderCart();
});

