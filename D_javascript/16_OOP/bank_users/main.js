const year = document.getElementById('year');
const interest_true = document.getElementById('interest_true');
const interest_false = document.getElementById('interest_false');
const calcBtn = document.getElementById('calcBtn');
const table = document.getElementById('table');
const header = document.getElementById('header');
let allUsers = [];
class User {
    constructor(id, name, surName, balance_id, balance, balance_type) {
        this.id = id;
        this.name = name;
        this.surName = surName;
        this.balance_id = balance_id;
        this.balance = balance;
        this.balance_type = balance_type;
    }
}

fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((users) => {
        allUsers = users.map((user) => new User(user.id, user.name, user.surName, user.balance_id, user.balance, user.balance_type));
        allUsers.map((user) => {
            table.innerHTML += 
            `<tr id="${user.id}">
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.surName}</td>
            <td>${user.balance_id}</td>
            <td class="bg-${getColorByType(user.balance_type)}">${getStringByType(user.balance_type)}</td>
            <td>${th_sprtr(user.balance)}</td>
            </tr>`;

        });
    });

calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (year.value !== '' && interest_true.value !== '' && interest_false.value !== '') {
        header.innerHTML += `
        <th scope="col">Calculated Interest</th>
        <th scope="col">Calculated Balance</th>
        `;
        calcInterest(allUsers);
    } else {
        alert('Мэдээлэл оруулна уу');
    }
});

// Functions

function getStringByType(type) {return (type ? 'Хугацаатай' : 'Хугацаагүй');}

function getInterestByType(type) {return (type ? interest_true.value : interest_false.value);}

function getColorByType(type) {return (type ? 'primary' : 'secondary');}

function calcInterest(users) {
    users.map((user) => {
        let interest = user.balance * getInterestByType(user.balance_type) / 100 * year.value;
        let balance = user.balance + interest;
        document.getElementById(`${user.id}`).innerHTML += 
        `<td>${th_sprtr(interest)}</td>
        <td>${th_sprtr(balance)}</td>`;
    })
}

function th_sprtr(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    return num_parts.join(".");
}