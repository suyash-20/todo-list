const todoInput = document.querySelector("#todo-input"); //line 43 of index.html, basically to append the new todo elements
const todosContainer = document.querySelector(".todos");
const todos = [];

todoInput.addEventListener("keyup", function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        //console.log(e.target.value);
        todos.push(e.target.value);
        newTodo(e.target.value);
        todoInput.value="";
    }
});

function newTodo(value){

    //all these constants are used to create the HTML tags(p,div, input, etc.)
    const todo = document.createElement("div");
    const todoText = document.createElement("p");
    const todoCheckBox = document.createElement("input");
    const todoCheckBoxLabel = document.createElement("label");
    const todoCross = document.createElement("span");

    todoText.textContent = value;
    todoCheckBox.type = "checkbox";
    todoCheckBox.name = "checkbox";
    todoCheckBoxLabel.htmlFor = "checkbox";

    todoCheckBoxLabel.addEventListener('click', function(e){
        if(todoCheckBox.checked){
            todoCheckBox.checked = false;
            todoText.style.textDecoration = "none"; //for to-do to look as they are
            todoCheckBoxLabel.classList.remove("active");
        }
        else{
            todoCheckBox.checked = true;
            todoText.style.textDecoration = "line-through"; //strike trhough look for completed ones
            todoCheckBoxLabel.classList.add("active");
        }
    });

    //todoCross.textContent = "X";
    todoCross.addEventListener("click", function(e){
        e.target.parentElement.remove(); //removing the added elements

    });

    todo.classList.add("todo");
    todoCheckBoxLabel.classList.add("circle");
    todoCross.classList.add("cross"); //no seperate class required in index.html, css has its style defined

    todo.appendChild(todoCheckBox);
    todo.appendChild(todoCheckBoxLabel);
    todo.appendChild(todoText);
    todo.appendChild(todoCross);

    todosContainer.appendChild(todo); //appending everything to todosContainer constant
}


function changeTheme() {  
    document.body.classList.toggle("light"); //theme toggling function
}