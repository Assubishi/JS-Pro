'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (elements) =>
    `<div class = "product-item">
                    <h3>${elements.title}</h3>
                    <p>${elements.price}</p>
                    <button class = "buy-btn">Купить</button>
                </div>`;


const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector(".products").innerHTML = productsList;
};

renderPage(products);