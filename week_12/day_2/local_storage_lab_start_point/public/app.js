var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item
  for(item of todos){
    addItem(item);
  }
}

var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  // this function needs to:
  // - create an li element containing the string 'item'
  let li = document.createElement("li");
  li.innerText = item;
  // - append the li to the "todo-list" ul
  ul.appendChild(li);
}

var handleButtonClick = function () {
  // this function needs to:
  // - get hold of the input box's value
  var input = document.querySelector('#new-item');
  // - append it to the "todo-list" ul by invoking addItem()
  addItem(input.value);
  // - add it to local storage by invoking save()
  save(input.value);
}

var save = function (newItem) {
  // this function needs to:
  // - get the data back from local storage and parse to an array
  var jsonString = localStorage.getItem('todoList');
  var saved_todoList = JSON.parse(jsonString) || [];
  // var saved_todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  // - add the newItem to the array
  saved_todoList.push(newItem);
  // - stringify the updated array
  // - save it back to localstoage
  localStorage.setItem('todoList', JSON.stringify(saved_todoList));
}

window.addEventListener('load', init);
