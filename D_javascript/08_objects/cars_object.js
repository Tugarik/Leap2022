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


// converting data to objects
let cars = [];
for (let i = 0; i < carBrands.length; i++){
   const car = {
       brand: carBrands[i][0],
       country: carBrands[i][1],
       year: carBrands[i][2],
   };
   cars.push(car);
}


// call functions
let firstLetter = "A"
let searchCountry = "Germany"
let objs = cars;
byBrand(firstLetter, objs);
byCountry(searchCountry, objs);
getStats(objs);

// function for search a brand by name's first letter --------------------

function byBrand(inp, cars) {
   let countNot = 0;
   for (let i = 0; i < cars.length; i++) {
  
       if (cars[i].brand.includes(inp)) {
           printCol(cars[i].brand, cars[i].country, cars[i].year);
       } else {
           countNot++
       }
   }
   if (countNot == cars.length) printNot();
}

// function for search a brand by country --------------------------------

function byCountry(inp, cars) {
   let countNot = 0;
   for (let i = 0; i < cars.length; i++) {
  
       if (cars[i].country.includes(inp)) {
           printRow(cars[i].brand, cars[i].country, cars[i].year);
       } else {
           countNot++
       }
   }
   if (countNot == cars.length) printNot();
}

// function for general statistics
function getStats(cars) {
   let countUS=0, countUK=0, countGR=0, countJP=0, countIT=0;
   for (i = 0; i < cars.length; i++) {
      
      if (cars[i].country == 'UK') {
         countUK++;
      } else if (cars[i].country == 'USA'){
         countUS++;
      } else if (cars[i].country == 'Germany'){
         countGR++;
      } else if (cars[i].country == 'Japan'){
         countJP++;
      } else if (cars[i].country == 'Italy'){
         countIT++;
      }
   }
   console.log(`\nNiit ${cars.length} mashin. Uunees UK ${countUK} , USA ${countUS} , Germany ${countGR} , Japan ${countJP} , Italy ${countIT} mashin bn.`);
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