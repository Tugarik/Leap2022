const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
let inputCountry = document.querySelector('.btn-country').value;
let showBtn = document.querySelector('.submit-btn');
let neighbours = [];
let neighbour;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    countriesContainer.innerHTML = '';
    getCountry(e.target.country_name.value);

});

// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}
function getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then((data) => { renderCountry(data[0], "searched"); getNeighbours(neighbours); });
}

function renderCountry(country, className) {
    console.log(country);
    const html = `<article class="country ${className}">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(country.population / 1_000_000).toFixed(2)} mln</p>
      <p class="country__row"><span>🗣️</span>${Object.values(country.languages)}</p>
      <p class="country__row"><span>💰</span>${Object.values(country.currencies)[0].name} : ${Object.values(country.currencies)[0].symbol}</p>
    </div>
    </article> `;
    countriesContainer.innerHTML += html;
    neighbours = country.borders;

}



function getNeighbours(neighbours) {
    neighbours.forEach((neighbour) => {
        console.log(neighbour);
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
            .then(res => res.json())
            .then((data) => {
                renderCountry(data[0], "neighbour")
            });

    })
}






