
let toDoItems;

if(!window.localStorage.tasks){
  toDoItems = [
    {description: 'Stand Up', complete: false},
    {description: 'Pair Programming', complete: false},
    {description: 'Individual', complete: false},
    {description: 'Almuerzo', complete: false},
    {description: 'Lecture', complete: false},
    {description: 'Code Review', complete: false},
  ];
  localStorage.setItem("tasks", JSON.stringify(toDoItems));
}
else{

  toDoItems = JSON.parse(localStorage.getItem("tasks"));
}

function ToDo (description) {

  this.description = description;
  this.complete = false;
}

const completeToDo = (e) => {

  const $i = e.target;
  const index = $i.id;
 
  toDoItems[index].complete = toDoItems[index].complete ? false : true;
  displayToDos();
}

const buildToDo = (todo, index) => {

  const toDoShell = document.createElement("div"),
    $i = document.createElement("i"),
    $delete = document.createElement("i"),
    toDoText = document.createElement("span");
  
  if(todo.complete) $i.classList.add('bi', 'bi-check2-all');
  if(!todo.complete) $i.classList.add('bi', 'bi-check2', 'icon-check');
  $i.id = index;
  
  toDoShell.classList.add('toDoShell');
  toDoText.innerHTML = todo.description;

  $i.addEventListener('click', completeToDo);

  if(todo.complete) toDoText.classList.add('completeText');

  $delete.classList.add('delete', 'bi', 'bi-x-lg');
  $delete.id = index;
  $delete.addEventListener('click', deleteTask);

  toDoShell.appendChild($i);
  toDoShell.appendChild(toDoText);
  toDoShell.appendChild($delete);

  return toDoShell;
}


const buildToDos = (toDos) => toDos.map((el, index) => buildToDo(el, index));

const displayToDos = () => {

  const toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';
  
  const tasks = buildToDos(toDoItems);
  tasks.forEach(el => toDoContainer.prepend(el));

  localStorage.setItem("tasks", JSON.stringify(toDoItems));
}

const deleteTask = e => {
  const index = e.target.id;
 toDoItems.splice(index, 1);
 displayToDos();
}

const addToDo = () => {

  const toDoInput = document.querySelector('#toDoInput');
  const description = toDoInput.value;

  if(!description) return toDoInput.focus();

  const newTodo = new ToDo(description)
  toDoItems.push(newTodo);
  toDoInput.value = '';
  displayToDos();
}


document.querySelector('#addButton').addEventListener('click', addToDo)

document.querySelector('#toDoInput').addEventListener("keyup", e => {

  if(e.keyCode === 13) addToDo();
});


displayToDos();
