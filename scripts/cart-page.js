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

});

//loading the form 
const checkoutBtn = document.querySelector()
const checkoutForm = document.querySelector('.chekout-form')
const submitBtn = document.querySelector 