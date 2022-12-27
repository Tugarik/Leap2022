// fetch('https://91b1-66-181-164-191.ap.ngrok.io/api/cars', {
//     method: 'DELETE',
//     headers: 
// })

fetch('https://91b1-66-181-164-191.ap.ngrok.io/api/cars', { mode: 'no-cors' })
    .then((res) => res.json())
    .then((data) => console.log(data));