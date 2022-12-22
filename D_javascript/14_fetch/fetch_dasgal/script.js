const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
let inputCountry = document.querySelector('.btn-country').value;
let showBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getCountry(e.target.country_name.value);
});

// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}
function getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then((data) => renderCountry(data[0]));
}

function renderCountry(country) {
    console.log(country);
    const html = `<article class="country">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(country.population / 1_000_000).toFixed(2)} mln</p>
      <p class="country__row"><span>🗣️</span>${Object.values(country.languages)}</p>
      <p class="country__row"><span>💰</span>${Object.values(country.currencies)[0].name} : ${Object.values(country.currencies)[0].symbol}</p>
    </div>
    </article> `;
    countriesContainer.innerHTML = html;
}
// getCountry(inputCountry);

// function show(e) {
//     e.preventDefault();
//     console.log(e.target)
//     // getCountry(inputCountry);
// }





