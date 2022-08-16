let todoInput = document.getElementById("todoInput");
let todoButton = document.getElementById("todoButton");
let container = document.querySelector(".container");
let todoListContainer = document.getElementById("todoListContainer");


todoButton.addEventListener("click",function(){

    if(todoInput.value == ""){
        alert("This can't be empty");
        return
    }

    let todoList = document.createElement("div");
    todoList.classList = "todoListContainer";
    todoList.innerHTML= todoInput.value ;
    let btnContainer = document.createElement("div");
    btnContainer.classList = "btnContainer"
    let todoListDone = document.createElement("button");
    todoListDone.innerHTML="Done";
    todoListDone.classList = "btn";
    let todoListDelete = document.createElement("button");
    todoListDelete.innerHTML = "Delete";
    todoListDelete.classList = "btn";
    todoList.appendChild(btnContainer);
    btnContainer.appendChild(todoListDone);
    btnContainer.appendChild(todoListDelete);
    container.appendChild(todoList);
    todoInput.value = ""

    let randomId = new Date().getTime();
    todoList.id = randomId;
    todoListDelete.id = randomId;
    todoListDone.id = randomId;

    todoListDelete.addEventListener("click",function(){
        if(todoList.id == todoListDelete.id){
            todoList.style.display="none";
        }
    })

    todoListDone.addEventListener("click",function(){
        if (todoList.id == todoListDone.id){
            todoList.style.backgroundColor="green";
            todoList.style.color="white";
        }
        
    })

})
