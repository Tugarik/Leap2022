const allBtn = document.getElementById('allBtn')
const modelsBtn = document.getElementById('modelsBtn')
const brandsBtn = document.getElementById('brandsBtn')
const screen = document.getElementById('screen');
const counter = document.getElementById('counter');
const form = document.querySelector("form");
const addBtn = document.getElementById('addBtn');
const addBrand = document.getElementById('addBrand').value;
const addModel = document.getElementById('addModel').value;
const addCountry = document.getElementById('addCountry').value;
const addImage = document.getElementById('addImage').value;
console.log(typeof addBrand);
const dropdownBrand = document.getElementById('dropdownBrand');
const dropdownModel = document.getElementById('dropdownModel');
const dropdownCountry = document.getElementById('dropdownCountry');

const brands = [];
const models = [];
const countries = [];

allBtn.addEventListener('click', genAll);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputSearch = e.target.car_search.value.toLowerCase();
    genSearch(inputSearch);
});

addBtn.addEventListener('click', () => {
    const data = {'model': addModel, 'brand': addBrand, 'country': addCountry, 'image': addImage};
    fetch("http://localhost:3333/api/cars", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(res => res.json())
    .then(res => console.log('Post Success: ' + res))
    .catch((error) => {
        console.error('Post Error:', error);
    });
});

fetch("http://localhost:3333/api/cars")
    .then((res) => res.json())
    .then((cars) => {
        console.log(cars);
        cars.map((car) => {
            if (!brands.includes(car.brand)) {
                brands.push(car.brand);
            }
            if (!models.includes(car.model)) {
                models.push(car.model);
            }
            if (!countries.includes(car.country)) {
                countries.push(car.country);
            }
        });

        genDropdownBrand(brands);
        genDropdownModel(models);
        genDropdownCountry(countries);
    })
    .catch((e) => console.log("error: ", e));

function genDropdownBrand (arr) {
    arr.map((el) => {
        dropdownBrand.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('brand', '${el}')">${el}</a></li>`;   
    });
}

function genDropdownModel (arr) {
    arr.map((el) => {
        dropdownModel.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('model', '${el}')">${el}</a></li>`;
    });
}

function genDropdownCountry (arr) {
    arr.map((el) => {
        dropdownCountry.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('country', '${el}')">${el}</a></li>`;
    });
}

function genFilter (filter, el) {
    fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            let count = 0;
            cars.map((car) => {               
                if (car[filter] == el) {
                    let card = 
                    `<div class="card" style="width: 18rem;">
                        <img src="${car.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${car.model}</h5>
                        <p class="card-text">${car.brand} / ${car.country}</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                        </div>
                    </div>`;
                    screen.innerHTML += card;
                    count++;
                }
            })
            if (count > 0) {
                counter.innerHTML = `<div>Search results: ${count} items found for current search.</div>`;
            } else {
                counter.innerHTML = `<div>No results found for current search.\nPlease try again.</div>`;
            }
        })
        .catch((e) => console.log("error: ", e));
}


function genAll() {
    fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            let count = 0;
            cars.map((car) => {
                let card = `<div class="card" >
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${car.model}</h5>
                    <p class="card-text">${car.brand} / ${car.country}</p>  
                    <a href="#" class="btn btn-primary">More Info</a>
                </div>
                </div>`;
                screen.innerHTML += card;
                count++;
            })
            if (count > 0) {
                counter.innerHTML = `<div>Search results: ${count} items found for current search.</div>`;
            } else {
                counter.innerHTML = `<div>No results found for current search.\nPlease try again.</div>`;
            }
        })
        .catch((e) => console.log("error: ", e));

}

function genSearch(inpSearch) {
    fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            let count = 0;
            cars.map((car) => {
                if (car.brand.toLowerCase().includes(inpSearch) 
                || car.model.toLowerCase().includes(inpSearch) 
                || car.country.toLowerCase().includes(inpSearch)) {
                    let card = `<div class="card" style="width: 18rem;">
                    <img src="${car.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${car.model}</h5>
                        <p class="card-text">${car.brand} / ${car.country}</p>  
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                    </div>`;
                    screen.innerHTML += card;
                    count++;
                } 
            })
            if (count > 0) {
                counter.innerHTML = `<div>Search results: ${count} items found for current search.</div>`;
            } else {
                counter.innerHTML = `<div>No results found for current search.\nPlease try again.</div>`;
            }
        })
        .catch((e) => console.log("error: ", e));
}