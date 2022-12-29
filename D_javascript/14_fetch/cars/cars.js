const allBtn = document.getElementById('allBtn')
const modelsBtn = document.getElementById('modelsBtn')
const brandsBtn = document.getElementById('brandsBtn')
const screen = document.getElementById('screen');
const counter = document.getElementById('counter');
const form = document.querySelector("form");
const addBtn = document.getElementById('addBtn');
const addBrand = document.getElementById('addBrand');
const addModel = document.getElementById('addModel');
const addCountry = document.getElementById('addCountry');
const addImage = document.getElementById('addImage');

const dropdownBrand = document.getElementById('dropdownBrand');
const dropdownModel = document.getElementById('dropdownModel');
const dropdownCountry = document.getElementById('dropdownCountry');
const addForm = document.getElementById('addForm')
const brands = [];
const models = [];
const countries = [];

allBtn.addEventListener('click', genAll);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputSearch = e.target.car_search.value.toLowerCase();
    genSearch(inputSearch);
});

addForm.addEventListener('submit', () => {
    // e.preventDefault();
    const data = { model: addModel.value, brand: addBrand.value, country: addCountry.value, image: addImage.value };
    console.log(data)
    fetch("http://localhost:3333/api/cars", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

function delCar(inp) {
    const data = { id: inp, };
    console.log(data);
    fetch(`http://localhost:3333/api/cars`, {
        method: 'DELETE',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(res => console.log('Delete Success: ' + res))
        .catch((error) => {
            console.error('Delete Error:', error);
        });
}

function genDropdownBrand(arr) {
    arr.map((el) => {
        dropdownBrand.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('brand', '${el}')">${el}</a></li>`;
    });
}

function genDropdownModel(arr) {
    arr.map((el) => {
        dropdownModel.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('model', '${el}')">${el}</a></li>`;
    });
}

function genDropdownCountry(arr) {
    arr.map((el) => {
        dropdownCountry.innerHTML += `<li><a class="dropdown-item ${el}" href="#" onclick="genFilter('country', '${el}')">${el}</a></li>`;
    });
}

function genFilter(filter, el) {
    fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            let count = 0;
            cars.map((car) => {
                if (car[filter] == el) {
                    let card =
                        `<div id="${car.id}" class="card" style="width: 18rem;">
                        <img src="${car.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${car.model}</h5>
                            <p class="card-text">${car.brand} / ${car.country}</p>
                            <a href="#" id="infoBtn" class="btn btn-primary">More Info</a>
                            <a href="#" id="delBtn" class="btn btn-primary" onclick="delCar('${car.id}')">Delete</a>
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
                let card =
                    `<div id="${car.id}" class="card" style="width: 18rem;">
                        <img src="${car.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${car.model}</h5>
                            <p class="card-text">${car.brand} / ${car.country}</p>
                            <a href="#" id="infoBtn" class="btn btn-primary">More Info</a>
                            <a href="#" id="delBtn" class="btn btn-primary" onclick="delCar('${car.id}')">Delete</a>
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
                    let card =
                        `<div id="${car.id}" class="card" style="width: 18rem;">
                        <img src="${car.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${car.model}</h5>
                            <p class="card-text">${car.brand} / ${car.country}</p>
                            <a href="#" id="infoBtn" class="btn btn-primary">More Info</a>
                            <a href="#" id="delBtn" class="btn btn-primary" onclick="delCar('${car.id}')">Delete</a>
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