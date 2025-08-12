const inputEl = document.getElementById("todo-input")
const listEl = document.getElementById("todo-list")
const addButtonEl = document.getElementById("add-btn")

// JSON = JavaScript Object Notation
// iterable object

const products = [
    { title: "nike shoe", price: 400 },
    { title: "nike shoe", price: 400 },
    { title: "nike shoe", price: 400 },
    { title: "nike shoe", price: 400 },
]
const user = {
    name: "joe done",
    age: 11
}
console.log(typeof user)

localStorage.setItem("user", JSON.stringify(user))
localStorage.setItem("products", JSON.stringify(products))


const savedUser = JSON.parse(localStorage.getItem("user"))
console.log(savedUser)

// SET ITEM
// localStorage.setItem("userssus826egssg", "james ade")
// localStorage.setItem("token", "938yeguijakdy897afyudsvhbxiy")

// GET ITEM
// const user = localStorage.getItem("user")
// console.log(user)

// REMOVE ITEM
// localStorage.removeItem("token")

// CLEAR
// localStorage.clear()
