const year = document.getElementById('year');
const interest_true = document.getElementById('interest_true');
const interest_false = document.getElementById('interest_false');
const calcBtn = document.getElementById('calcBtn');
const table = document.getElementById('table');
const header = document.getElementById('header');
const addForm = document.getElementById('addForm')
const addBtn = document.getElementById('addBtn')
const inpFirst = document.getElementById('inpFirst');
const inpLast = document.getElementById('inpLast');
const inpBalNumber = document.getElementById('inpBalNumber');
const inpSelect = document.getElementById('inpSelect');
const inpBalance = document.getElementById('inpBalance');
let added = false;
let addedCalc = false;

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

fetchData();

// Functions
function fetchData() {
    fetch("http://localhost:3333/api/users")
        .then((res) => res.json())
        .then((users) => {
            console.log(users);
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
}

function th_sprtr(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    return num_parts.join(".");
}

function getStringByType(type) { return (type ? 'Term deposit' : 'Demand deposit'); }

function getInterestByType(type) { return (type ? interest_true.value : interest_false.value); }

function getColorByType(type) { return (type ? 'primary' : 'secondary'); }

function calcInterest(users) {
    users.map((user) => {
        let interest = user.balance * getInterestByType(user.balance_type) / 100 * year.value;
        let balance = user.balance + interest;
        const html = `<td class="tobeDeleted">${th_sprtr(interest)}</td>
        <td  class="tobeDeleted"> ${th_sprtr(balance)}</td>`;
        if (addedCalc == true) {
            console.log('calc added');
            //remove function

            const elements = document.querySelectorAll('.tobeDeleted');
            console.log(elements);
            while (elements.length > 0) {
                document.getElementById(`${user.id}`).removeChild(elements[0]);
            }

            addedCalc = false;
        }
        document.getElementById(`${user.id}`).innerHTML += html;

    })
    addedCalc = true;
}

// Event listeners
calcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (year.value !== '' && interest_true.value !== '' && interest_false.value !== '') {
        const html = `
        <th id="calc_interest" class="added" scope="col" onclick="sortTable(5)"  style="cursor:pointer">Calculated Interest</th>
        <th id="calc_balance" class="added" scope="col" onclick="sortTable(6)" style="cursor:pointer">Calculated Balance</th>
        `;
        if (added == false) {
            header.innerHTML += html;
            added = true;
        }
        calcInterest(allUsers);
    } else {
        alert('Some input fields are empty');
    }
});

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let getSelect = inpSelect.value == 'true' ? true : false;
    const data = { name: inpFirst.value, surName: inpLast.value, balance_id: inpBalNumber.value, balance_id: getSelect, balance: inpBalance.value };
    fetch("http://localhost:3333/api/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => { console.log('Post Success: ' + res) })
        .catch((error) => {
            console.error('Post Error:', error);
        });
});

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr));
})));

// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//         //start by saying: no switching is done:
//         switching = false;
//         rows = table.rows;
//         /*Loop through all table rows (except the
//         first, which contains table headers):*/
//         for (i = 1; i < (rows.length - 1); i++) {
//             //start by saying there should be no switching:
//             shouldSwitch = false;
//             /*Get the two elements you want to compare,
//             one from current row and one from the next:*/
//             x = rows[i].getElementsByTagName("td")[n];
//             y = rows[i + 1].getElementsByTagName("td")[n];
//             //check if the two rows should switch place:
//             if (Number(x.innerHTML.replace("'", '')) > Number(y.innerHTML.replace("'", ''))) {
//                 //if so, mark as a switch and break the loop:
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//         if (shouldSwitch) {
//             /*If a switch has been marked, make the switch
//             and mark that a switch has been done:*/
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
// }