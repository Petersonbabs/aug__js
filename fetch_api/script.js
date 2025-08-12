// API => Application Programming Interface
// UI/UX => 

// fetch(url, {options})
// CRUD = Create Read Update Delete

// request url
// methods: POST GET PATCH/PUT DELETE
// body
// headers: add additional information about the request
// synchronous / asynchronous

// endpoint
// async / await
// try catch finally


// cascading stylesheet
// cascade

const productsEl = document.getElementById("products")
const btnEl = document.getElementById("btn")
const baseUrl = "https://fakestoreapi.com"
// baseUrl
// endpoint
async function getProducts() {
    console.log("loading...");
    try {
        const response = await fetch(`${baseUrl}/products`)
        const data = await response.json()
        console.log(data)
        data.forEach(ele => {
            productsEl.innerHTML += `
            <div>
                <img src="${ele.image}" width="200"/>
                <h2>${ele.title}</h2>
                <p>$${ele.price}</p>
                <p>${ele.category}</p>
            </div>
        `
        })
    } catch (error) {
        console.log(error);
    } finally {
        console.log("DONE!")
    }
}


getProducts()


const product = {
    id: 2,
    title: "Nike shoe",
    price: 7.8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nam.",
    category: "fashion",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"
}

const addNewProduct = async () => {
    console.log("Adding products...")
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer -wouirsdfviawsdyzcgatyusdgyiawsvh",
                "Accept": "application/text"
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

btnEl.addEventListener("click", addNewProduct)

// parameter

const getSingleProduct = async (id = 1) => {
    console.log("Fetching single product...")
    try {
        const res = await fetch(`${baseUrl}/products/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DOne!")
    }
}

getSingleProduct(20)

const updateProduct = async (id) => {
    console.log("Updating product...")
    try {
        const res = await fetch(`${baseUrl}/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product)
        })
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// updateProduct(7)

const deleteProduct = async (id) => {
    console.log("deleting...")
    try {
        const res = await fetch(`${baseUrl}/products/${id}`, {
            method: "DELETE"
        })
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Done!")
    }
}

// deleteProduct() 