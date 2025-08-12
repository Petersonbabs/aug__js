const productsEl = document.getElementById("products")
const products = [
    { id: 1, name: "Wireless Mouse", price: 25.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: true },
    { id: 3, name: "USB-C Cable", price: 9.99, inStock: false },
    { id: 4, name: "Laptop Stand", price: 39.99, inStock: true },
    { id: 5, name: "Bluetooth Speaker", price: 59.99, inStock: true },
    { id: 6, name: "External Hard Drive", price: 120.00, inStock: false },
    { id: 7, name: "Smartphone Tripod", price: 19.99, inStock: true },
    { id: 8, name: "Noise Cancelling Headphones", price: 199.99, inStock: true },
    { id: 9, name: "LED Desk Lamp", price: 29.99, inStock: false },
    { id: 10, name: "Portable Charger", price: 34.99, inStock: true }
];

// forEach => invoke a function on each elemtent
// map => invoke a function on each elemtent, return a modified

// const ggg = products.forEach((ele) => {
//     return ele.name
// })
// console.log(ggg);

// const gggg = products.map((ele) => {
//     return ele.price
// })
// console.log(gggg);

const ggg = products.map((ele) => ele)
console.log(ggg);



const displayProducts = () => {
    products.forEach((ele, index) => {
        productsEl.innerHTML += `
            <div class="product-card">
                <h3>${ele.name}</h3>
                <p>$${ele.price}</p>
                <a href="./singleProduct.html?id=${ele.id}">View Product</a>
            </div>
        `
    })
}



displayProducts()
