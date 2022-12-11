const carBrands = [
   ["Aston Martin Lagonda Ltd", "UK", 2016],
   ["Audi", "Germany", 2016],
   ["BMW", "Germany", 2016],
   ["Chevrolet", "USA", 2016],
   ["Dodge", "USA", 2016],
   ["Ferrari", "Italy", 2016],
   ["Honda", "Japan", 2016],
   ["Jaguar", "UK", 2016],
   ["Lamborghini", "Italy", 2016],
   ];
  
// call functions
let firstLetter = "A"
let arr = carBrands;
byBrand(firstLetter, arr);

let country = "USA";
byCountry(country, arr);

getStats(arr);



// function for search a brand by name's first letter --------------------

function byBrand(inp, arr) {
   let countNot = 0;
   for (let i = 0; i < arr.length; i++) {
  
       if (arr[i][0].includes(inp)) {
           printCol(arr[i][0], arr[i][1], arr[i][2]);
       } else {
           countNot++
       }
   }
   if (countNot == arr.length) printNot();
}

// function for search a brand by country --------------------------------

function byCountry(inp, arr) {
   let countNot = 0;
   for (let i = 0; i < arr.length; i++) {
  
       if (arr[i][1].includes(inp)) {
           printRow(arr[i][0], arr[i][1], arr[i][2]);
       } else {
           countNot++
       }
   }
   if (countNot == arr.length) printNot();
}

// function for general statistics
function getStats(inp) {
   let countUS=0, countUK=0, countGR=0, countJP=0, countIT=0;
   for (i = 0; i < inp.length; i++) {
      if (inp[i][1] == 'UK') {
         countUK++;
      } else if (inp[i][1] == 'USA'){
         countUS++;
      } else if (inp[i][1] == 'Germany'){
         countGR++;
      } else if (inp[i][1] == 'Japan'){
         countJP++;
      } else if (inp[i][1] == 'Italy'){
         countIT++;
      }
   }

   console.log(`\nNiit ${inp.length} mashin. Uunees UK ${countUK} , USA ${countUS} , Germany ${countGR} , Japan ${countJP} , Italy ${countIT} mashin bn.`);
}

// output functions -----------------------------------------------------
function printCol(name, country, year) {
   console.log(`brand: ${name}`);
   console.log(`country: ${country}`);
   console.log(`year: ${year}\n`);
}

function printRow(name, country, year) {
   console.log(`${name}, ${country}, ${year}`);
}

function printNot() {
   console.log("Not found");
}