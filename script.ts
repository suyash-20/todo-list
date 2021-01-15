const todoInput = document.querySelector(".type-todo");
const todos=[];


todoInput.addEventListener("keyup", function (name){
    if(name.key==='Enter' || name.keyCode ===13){
        todos.push(name.target.value);
    }
});


function changeTheme():void{
    document.body.classList.toggle("light");
}