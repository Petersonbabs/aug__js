const inputEl = document.getElementById("todo-input")
const listEl = document.getElementById("todo-list")
const addButtonEl = document.getElementById("add-btn")
const todoArray = JSON.parse(localStorage.getItem("todo-items")) || []
console.log(todoArray)

// add new todo item
const addTodoItem = () => {
    todoArray.push(inputEl.value)

    localStorage.setItem("todo-items", JSON.stringify(todoArray))
    displayTodoItems()
}

// display all todo items
const displayTodoItems = () => {
    listEl.innerHTML = ""
    todoArray.forEach((ele, index) => {
        listEl.innerHTML += `
            <li>${ele}</li>
        `
    })
}

addButtonEl.addEventListener("click", addTodoItem)
displayTodoItems()