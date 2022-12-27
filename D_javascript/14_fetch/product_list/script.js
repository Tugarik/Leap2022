let productsContainer = document.querySelector('#products');

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => { console.log(data.products); renderCard(data.products) });

function renderCard(products) {
    products.map((product) => {
        const html = `<div class="${product.id}">
            
        </div>`;
        productsContainer.innerHTML += html;
    })
}


