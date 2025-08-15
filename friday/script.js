// API => Application Programming Interface
// UI/UX => 

// promise-based 

// fetch(url, {})
// CRUD = Create Read Update Delete



// request url
// methods: POST GET PATCH/PUT DELETE
// body
// headers: add additional information about the request
// Content-Type, Accept, Authorization, 



// synchronous / asynchronous

// endpoint
// async / await
// try catch finally


// cascading stylesheet
// cascade


// baseUrl
// endpoint

const baseUrl = "https://fakestoreapi.com"
const productsEl = document.getElementById("products")

async function getProducts() {
    console.log("Loading...")
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        data.forEach((ele, index) => {
            productsEl.innerHTML += `
                <div class="product-card">
                <img src="${ele.image}" width="200"/>
                    <h3>${ele.title}</h3>
                    <p>${ele.category}</p>
                    <h1>${ele.rating.rate} ${ele.rating.count}</h1 >
                
                </div >
                `
        })
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Stop loading!")
    }
}
// const user = {
//     name: "poiuyg",
//     age: 89
// }
// const jsonUser = { "name": "poiuyg", "age": 89 }

// console.log(JSON.stringify(user))
// console.log(JSON.p
getProducts()
//  =
const product = {
    id: 1,
    title: "Luxury 4-Bedroom Duplex",
    price: 120000000.0,
    description: "A stunning modern duplex with a private pool, rooftop terrace, and smart home features.",
    category: "Residential",
    image: "https://example.com/images/property1.jpg"
}

const addProduct = async () => {
    console.log("Adding product...")
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Stop adding product!")
    }
}

// addProduct()

const getSingleProduct = async (id) => {
    console.log("Fetching single product...")
    try {
        const res = await fetch(`${baseUrl}/products/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Stop loading!")
    }
}

getSingleProduct(16)