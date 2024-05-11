import products from "./products.js";
import cart from "./cart.js";
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

//load template file
const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
    });
}
loadTemplate();
const populateOrder = () => {
    const orderContainer = document.querySelector('.order');
    console.log('Order Container:', orderContainer);

    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Items:', cart);

    // Clear existing content
    orderContainer.innerHTML = "";

    if (cart && cart.length > 0) {
        cart.forEach(item => {
            const product = products.find(product => product.id === item.product_id);
            if (product) {
                const newItem = document.createElement('div');
                newItem.classList.add('cart-item');
                newItem.innerHTML = `
                    <div class="info-container">
                        <div class="info">
                            <div class="image">
                                <img src="${product.image}" alt="${product.name}">
                            </div>
                            <div class="about">
                                <p>${product.name}, ${product.sex} <br> ${product.sire} x ${product.dameSire}</p>
                                <p>Quantity: ${item.quantity}</p>
                            </div>
                        </div>
                    </div>`;
                orderContainer.appendChild(newItem);
            }
        });
    } else {
        orderContainer.textContent = "Your cart is empty.";
    }
};











