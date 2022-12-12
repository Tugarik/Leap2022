document.body.style.width = '500px';
// document.body.style.display = 'flex';
document.getElementById("aimagNames").style.display = 'flex';
document.getElementById("aimagNames").style.flexWrap = 'wrap';
document.getElementById("aimagNames").style.justifyContent = 'space-between';
document.getElementById("aimagNames").style.width = '100%';


let list = document.querySelectorAll('li');
let lenList = document.getElementById("aimagNames").getElementsByTagName('li').length;
console.log(list[0].innerText);
console.log(list[lenList-1].innerText);
console.log(document.getElementById('aimag-315').innerText);


for (i = 0; i < list.length; i++) {
   list[i].style.color = 'blue';
   list[i].style.listStyleType = 'none';
   list[i].style.padding = '5px';
   list[i].style.margin = '5px';
   list[i].style.borderRadius = '5px';
   list[i].style.border = '2px solid grey';
   if (list[i].id[6] == 1) {
      list[i].style.backgroundColor = '#588c7e';
      list[i].style.color = '#ffffff';
   } else if (list[i].id[6] == 2) {
      list[i].style.backgroundColor = '#622569';
      list[i].style.color = '#ffffff';
   } else if (list[i].id[6] == 3) {
      list[i].style.backgroundColor = '#ff6f69';
   } else if (list[i].id[6] == 4) {
      list[i].style.backgroundColor = '#ffcc5c';
   } else if (list[i].id[6] == 5) {
      list[i].style.backgroundColor = '#96ceb4';
      list[i].style.color = '#ffffff';
   }
}

