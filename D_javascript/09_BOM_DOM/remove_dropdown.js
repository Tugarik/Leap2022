// creating form

let rootElement = document.getElementById('root');

let form = document.createElement('form');
rootElement.appendChild(form);
let select = document.createElement('select');
select.id = ('colorSelect')
form.appendChild(select);
select.style.width = '200px';

for (i = 0; i < 6; i++) {
   let addOption  = document.createElement('option');
   select.appendChild(addOption);
}
let options = document.getElementsByTagName('option');
options[0].innerText = 'Red';
options[1].innerText = 'Green';
options[2].innerText = 'BLue';
options[3].innerText = 'White';
options[4].innerText = 'Orange';
options[5].innerText = 'Black';



// creating button
let addButton = document.createElement('input');
addButton.type = 'button';
addButton.value = 'Select and Remove';
addButton.id = 'remove';
form.appendChild(addButton); 

addButton = document.createElement('input');
addButton.type = 'button';
addButton.value = 'Count';
addButton.id = 'count';
form.appendChild(addButton); 

let buttonR = document.querySelector('#remove');
buttonR.addEventListener('click', removeSelected);

let buttonC = document.querySelector('#count');
buttonC.addEventListener('click', countOptions);

function removeSelected() {
   x = document.getElementById('colorSelect');
   x.remove(x.selectedIndex);
}

function countOptions() {
   count = 0;
   let list = '';
   for (i = 0; i < select.options.length; i++) {
      count++;
      list += options[i].innerText + '\n';
   }
   alert(`Number of items: ${count}\n${list}`);
}
