let allBtn = document.getElementById('allBtn')
let modelsBtn = document.getElementById('modelsBtn')
let brandsBtn = document.getElementById('brandsBtn')
let screen = document.getElementById('screen');

let dropToyota = document.getElementById('dropToyota');
let dropLexus = document.getElementById('dropLexus');
let dropPrius10 = document.getElementById('dropPrius10');
let dropPrius20 = document.getElementById('dropPrius20');
let dropPrius30 = document.getElementById('dropPrius30');


allBtn.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            console.log(cars);
            screen.innerHTML = '';
            cars.map((car) => {
                let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                screen.innerHTML += card;
            })
        })
        .catch((e) => console.log("e: ", e));
});

dropToyota.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            cars.map((car) => {
                if (car.brand == 'Toyota') {
                    let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                    screen.innerHTML += card;

                }
            })
        })
        .catch((e) => console.log("e: ", e));
});

dropLexus.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            cars.map((car) => {
                if (car.brand == 'Lexus') {
                    let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                    screen.innerHTML += card;

                }
            })
        })
        .catch((e) => console.log("e: ", e));
});


dropPrius10.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            cars.map((car) => {
                if (car.model == 'Prius 10') {
                    let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                    screen.innerHTML += card;

                }
            })
        })
        .catch((e) => console.log("e: ", e));
});

dropPrius20.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            cars.map((car) => {
                if (car.model == 'Prius 20') {
                    let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                    screen.innerHTML += card;

                }
            })
        })
        .catch((e) => console.log("e: ", e));
});

dropPrius30.addEventListener('click', async () => {
    const res = await fetch("http://localhost:3333/api/cars")
        .then((res) => res.json())
        .then((cars) => {
            screen.innerHTML = '';
            cars.map((car) => {
                if (car.model == 'Prius 30') {
                    let card = `<div class="card" style="width: 18rem;">
                <img src="${car.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${car.model}</h5>
                  <p class="card-text">${car.brand}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
                    screen.innerHTML += card;

                }
            })
        })
        .catch((e) => console.log("e: ", e));
});