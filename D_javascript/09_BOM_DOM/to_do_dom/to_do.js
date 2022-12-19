// function for creating elements
function newClass(parent_name, tag_name, class_name) {
  let newElement = document.createElement(`${tag_name}`);
  newElement.className = class_name;
  parent_name.appendChild(newElement);
  return newElement;
}

// structure building
let rootElement = document.getElementById("root");

let container = newClass(rootElement, "div", "container-sm text-center");
let header = newClass(container, "div", "header bg-info mb-5 mt-2");
let appHeader = newClass(container, "h1", "appHeader");
let statusField = newClass(container, "div", "statusField d-flex justify-content-center my-5");
let dateCurrent = newClass(statusField, "div", "dateCurrent bg-primary text-white fw-semibold p-3 rounded mx-2");
let doneCurrent = newClass(statusField, "div", "doneCurrent bg-success text-white fw-semibold p-3 rounded mx-2");
let statusCurrent = newClass(statusField, "div", "statusCurrent bg-danger text-white fw-semibold p-3 rounded mx-2");
let formField = newClass(container, "form", "formField row  justify-space-between bg-light shadow");
let inputField = newClass(formField, "input", "inputField p-3 pt-4 mb-2 border-0 bg-light col-9");
let addButton = newClass(formField, "div", "btn p-3 pt-4 border-0 col-3 rounded-0 fw-semibold");
let headerField = newClass(container, "div", "headerField pt-5");
let listHeader = newClass(headerField, "h2", "listHeader");
let horizontal = newClass(container, "hr", "rule ");
let list = newClass(container, "div", "list");
let counter = 0;
let counterDone = 0;
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
let footer = newClass(container, "div", "footer bg-primary mt-5");

// assigning values and decorations
header.style.height = "40px";
container.style.maxWidth = "600px";
appHeader.innerText = "ToDo List App";
appHeader.style.color = "#1c315e";

dateCurrent.innerText = `Он сар өдөр: ${year}-${month}-${date}`;
dateCurrent.style.width = "150px";

statusCurrent.innerText = `${counter} таск үлдлээ!`;
statusCurrent.style.width = "150px";
statusCurrent.style.display = "none";
doneCurrent.innerText = `${counterDone} таск хийгдсэн!`;
doneCurrent.style.width = "150px";
doneCurrent.style.display = "none";
formField.style.borderBottom = "2px solid #f49d1a";
inputField.placeholder = "Таскаа оруулна уу";
inputField.style.outline = "none";
listHeader.innerText = "Жагсаалт";
listHeader.style.color = "#1c315e";
addButton.innerText = "+ нэмэх";
addButton.cursor = "pointer";
addButton.style.backgroundColor = "#f49d1a";
addButton.style.color = "#ffffff";
addButton.addEventListener("click", doAdd);

// function to add a new task
function doAdd() {

  //create a status window
  counter++;
  statusCurrent.style.display = "block";
  statusCurrent.innerText = `${counter} \n\tтаск үлдлээ!`;

  //create task field in list area
  let taskField = newClass(list, "div", "taskField shadow bg-light mb-1 row d-flex rounded");
  taskField.style.border = "1px solid #f49d1a";

    //create a task
  let task = newClass(taskField, "input", "task  border-0 col-md-9 col-8 bg-transparent");
  task.value = inputField.value;
  task.disabled = true;
  task.style.outline = "none";
  inputField.value = "";

  //create buttons container in taskField
  let btn_set = newClass(taskField, "div", "col-md-3 col-4 d-flex");

  //create edit button
  let editBtn = newClass(btn_set, "div", "editBtn btn");
  editBtn.innerHTML = '<i class="bi bi-pencil-fill text-primary"></i>';
  
  //event listener for edit button
  editBtn.addEventListener("click", () => {
    if (task.disabled) {
      task.disabled = false;
      editBtn.innerHTML = '<i class="bi bi-save-fill text-primary"></i>';
    } else {
      task.disabled = true;
      editBtn.innerHTML = '<i class="bi bi-pencil-fill text-primary"></i>';
    }
  });

  //create done button
  let doneBtn = newClass(btn_set, "div", "doneBtn btn");
  doneBtn.innerHTML = '<i class="bi bi-check-square-fill text-secondary"></i>';

  //event listener for done button
  doneBtn.addEventListener("click", () => {
    if (task.style.textDecoration == "line-through") {
      task.style.textDecoration = "none";
      counter++;
      counterDone--;
      statusCurrent.innerText = `${counter} \n\tтаск үлдлээ!`;
      doneCurrent.innerText = `${counterDone} таск хийгдсэн!`;
      doneBtn.innerHTML =
        '<i class="bi bi-check-square-fill text-secondary"></i>';
    } else {
      task.style.textDecoration = "line-through";
      counter--;
      counterDone++;
      statusCurrent.innerText = `${counter} \n\tтаск үлдлээ!`;
      doneCurrent.innerText = `${counterDone} таск хийгдсэн!`;
      doneBtn.innerHTML =
        '<i class="bi bi-check-square-fill text-success"></i>';
    }
    if (counterDone == 0) {
      doneCurrent.style.display = "none";
    } else {
      doneCurrent.style.display = "block";
    }
    if (counter == 0) {
      statusCurrent.style.display = 'none';
    }  else {
      statusCurrent.style.display = 'block';
    }
  });

  //create del button
  let delBtn = newClass(btn_set, "div", "delBtn btn");
  delBtn.innerHTML = '<i class="bi bi-trash-fill text-danger"></i>';

  //del button event listener
  delBtn.addEventListener("click", () => {
    taskField.remove();
    if (task.style.textDecoration == "line-through") {
      counterDone--;
      doneCurrent.innerText = `${counterDone} таск хийгдсэн!`;
    } else {
      counter--;
      statusCurrent.innerText = `${counter} \n\tтаск үлдлээ!`;
    }
    if (counter == 0) {
      statusCurrent.style.display = 'none';
    } 
    if (counterDone == 0) {
      doneCurrent.style.display = "none";
    }
  });
}

