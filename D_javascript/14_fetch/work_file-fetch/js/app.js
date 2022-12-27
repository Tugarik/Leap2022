let breedsSelect = document.querySelector('#breeds');
let card = document.querySelector('.card');

breedsSelect.addEventListener('change', () => {
    fetchImage(breedsSelect.value);
})

card.addEventListener('click', () => {
    fetchImage(breedsSelect.value);
})

fetch("https://dog.ceo/api/breeds/list")
    .then((resp) => resp.json())
    .then((data) => {
        addOption(data.message);
        fetchImage(data.message[0]);
        console.log(data);
    });

function addOption(breeds) {
    breeds.map((breed) => {
        let html = `<option value="${breed}">${breed}</option>`;
        breedsSelect.innerHTML += html;
    })
};
function fetchImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((resp) => resp.json())
        .then((data) => generateImg(data.message));
};
function generateImg(url) {
    let image = `<img src="${url}" alt="breed image">`;
    card.innerHTML = image;
};