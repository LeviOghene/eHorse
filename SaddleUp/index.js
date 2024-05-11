import cart from "./cart.js";
import products from "./products.js";
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
        initApp();
    });
}
loadTemplate();
const initApp = () => {
    // load list products
    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
         newProduct.innerHTML =
          `
         <div class="profile">
         <a href="detail.html?id=${product.id}">
         <img src="${product.image}" alt="">
         </a>
         <p>${product.name}</p>
     </div>

     <div class="info">
         <div>
          <p>Birth Year: ${product.birth}</p>
          <p>Breed: ${product.breed}</p>
          <p>Sex: ${product.sex}</p>
         </div>
         <div>
          <p>Height: ${product.height}</p>
          <p>Dame's Sire :${product.dameSire}</p>
          <p>Sire: ${product.sire}</p>
         </div>
     </div>
     
     <div class="price">
         <p>$${product.price}</p>
         <button class="addCart"
             data-id="${product.id}">    
             <div class="cart"><img src="./images/Vector (5).svg" alt=""></div>
             Add to Cart
         </button>
     </div>
         `
        listProduct.appendChild(newProduct);
    })
}



