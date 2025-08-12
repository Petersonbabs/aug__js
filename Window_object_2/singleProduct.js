const allProducts = [
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

const productEl = document.getElementById("product")

const params = new URLSearchParams(window.location.search)
const productId = params.get("id")

const displaySingleProduct = () => {
    const singleProduct = allProducts.find(ele => ele.id == productId)
    productEl.innerHTML = `
        <div class="product-detail">
            <h2>${singleProduct.name}</h2>
            <p>${singleProduct.price}</p>
        </div>
     `
}

displaySingleProduct()