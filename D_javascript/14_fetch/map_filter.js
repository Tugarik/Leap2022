// .filter() 
//.sort() 
//.map()


let foods = [
    {
        "name": "baked beans",
        "price": 0.40,
        "image": "beans.jpg",
        "type": "vegetables"
    },
    {
        "name": "hot dogs",
        "price": 1.99,
        "image": "hotdogs.jpg",
        "type": "meat"
    },
    {
        "name": "spam",
        "price": 2.85,
        "image": "spam.jpg",
        "type": "meat"
    },
    {
        "name": "refried beans",
        "price": 0.99,
        "image": "refried.jpg",
        "type": "vegetables"
    },
    {
        "name": "kidney beans",
        "price": 0.58,
        "image": "kidney.jpg",
        "type": "vegetables"
    },
    {
        "name": "garden peas",
        "price": 0.52,
        "image": "gardenpeas.jpg",
        "type": "vegetables"
    },
    {
        "name": "mushy peas",
        "price": 0.58,
        "image": "mushypeas.jpg",
        "type": "vegetables"
    },
    {
        "name": "corned beef",
        "price": 2.39,
        "image": "cornedbeef.jpg",
        "type": "meat"
    },
    {
        "name": "tomato soup",
        "price": 1.40,
        "image": "tomatosoup.jpg",
        "type": "soup"
    },
    {
        "name": "chopped tomatoes",
        "price": 0.45,
        "image": "tomato.jpg",
        "type": "vegetables"
    },
    {
        "name": "chicken noodle soup",
        "price": 1.89,
        "image": "chickennoodle.jpg",
        "type": "soup"
    },
    {
        "name": "carrot and coriander soup",
        "price": 1.49,
        "image": "carrotcoriander.jpg",
        "type": "soup"
    }
];
// let cheap = foods.filter(() => foods.price < 1);  // returns boolean
// foods.sort()   // returns negative || positive integer
// foods.sort((a,b) => a-b)  // sort foods by price
// let cheap3 = foods.map((food) => [food.name, food.price])  // returns anything

let translatedFoods = foods.map((food) => { return { ner: food.name, une: food.price } });
console.log(translatedFoods);

translatedFoods.sort((a, b) => a.une - b.une);
console.log(translatedFoods);

