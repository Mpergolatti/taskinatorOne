
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Create List Item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  // Create Div to hold task info and add to list Item
  var taskInfoEl = document.createElement("div"); 
  taskInfoEl.className = "task-info";

  // add HTML content to Div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"; // add HTML content to div
  listItemEl.appendChild(taskInfoEl);

  // add Entire list item to list
  tasksToDoEl.appendChild(listItemEl); 
};

formEl.addEventListener("submit", createTaskHandler);

