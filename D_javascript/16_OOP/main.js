// OOP

// class Student {
//     constructor(id, incomingName, surName, age, gender) {
//         this.id = id;
//         this.name = incomingName;
//         this.surName = surName;
//         this.age = age;
//         this.gender = gender;
//     }
//     // id;
//     // name;
//     // surName;  class object key 
// }

// let boldoo = new Student(1, 'boldoo', 'dorj', 25, 'male');
// let tsesteg = new Student(2, 'tsetseg', 'bat', 25, 'male');
// boldoo.id = 1;
// boldoo.age = 25;

// console.log(boldoo);
// console.log(boldoo.name);

// class Car {
//     constructor(id, country, brand, model, image) {
//         this.id = id;
//         this.country = country;
//         this.brand = brand;
//         this.model = model;
//         this.image = image;
//     }
// }

// fetch("http://localhost:3333/api/cars")
//     .then((res) => res.json())
//     .then((cars) => {
//         let oopCars = cars.map((car) => new Car(car.id, car.country, car.brand, car.model, car.image));
//         console.log(oopCars);
//     });

class User {
    constructor(id, name, surName, balance_id, balance) {
        this.id = id;
        this.name = name;
        this.surName = surName;
        this.balance_id = balance_id;
        this.balance = balance;
    }
}

fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((users) => {
        let oopUsers = users.map((user) => new User(user.id, user.name, user.surName, user.balance_id, user.balance));
        console.log(oopUsers);
    });