
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((resp) => resp.json())
    .then(doPurchase())
    .catch(error => console.log(error));


