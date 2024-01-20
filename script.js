const btn = document.getElementById("addBtn")
const textField = document.getElementById("toDoInput")
const toDoList = document.getElementById("toDoList")


btn.addEventListener("click",createToDo)

function createToDo(){
    const listElement = document.createElement("p")
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "remove"
    
    listElement.textContent = textField.value
    toDoList.appendChild(listElement)
    toDoList.appendChild(removeBtn)

}