//assigning button element obj. rep to a variable
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {

    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.classname = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};




formEl.addEventListener("submit", createTaskHandler);//file finds <form> element in page and saves it vae formEl so we can interact with form and access some of its chile HTML elements


