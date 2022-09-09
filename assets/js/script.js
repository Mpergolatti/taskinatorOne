// var buttonEl = document.querySelector("#save-task"); // button selector
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // UL selector

var createTaskHandler = function(event) { // universal function for button click 
  event.preventDefault();

  var listItemEl = document.createElement("li"); // creates the LI
    listItemEl.className = "task-item"; // Styles the element
    listItemEl.textContent = "This is a new task."; // creates text within the new task
    tasksToDoEl.appendChild(listItemEl); // appends the UL to the LI
};

formEl.addEventListener("submit", createTaskHandler); // calls the add a task function
