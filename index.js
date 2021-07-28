
const form = document.getElementById("form");
const list = document.querySelector(".list");
var input = document.getElementById("myInput");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    

});


function addTodo(){
    const todoEl = document.createElement("li");
    todoEl.innerText = input.value;
    
    console.log(todoEl);
    list.appendChild(todoEl);

    todoEl.addEventListener('click', (e) => {
        console.log(e.target);
        todoEl.classList.add("remove");
       
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
    })


}

