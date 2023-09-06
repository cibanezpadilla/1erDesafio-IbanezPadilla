class ProductManager {
    constructor () {
        this.products = []
    }

    getProducts(){
        console.log(this.products)
        return this.products        
    }

    getProductById(id) {
        const productSearched = this.products.find((prod)=> prod.id === id)
        if (productSearched){
            console.log(productSearched)
            return productSearched
        }else {
            console.log("Error: Product not found")
            return
        }
    }

    addProduct(product) {
        //hago un desestructuring del product que paso por parámetro
        const {title, description, price, thumbnail, code, stock} = product
        if (!title || !description || !price || !thumbnail || !stock || !code) {
            console.log("Warning! All fields must be filled")
            return
        }

        const isCodeAlreadyAdded = this.products.some((prod)=> prod.code === code)
        if (isCodeAlreadyAdded) {
            console.log("Warning! The product code already exists")
            return
        }
        
        let id
        const productsLenght = this.products.length
        productsLenght?
            id = this.products[this.products.length-1].id+1
            : id = 1        
        

        const newProduct = {id, ...product}
        this.products.push(newProduct)
        console.log('Product succesfully added')
        return newProduct
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


//TESTING

//creo instancia de la clase ProductManager
const manager1 = new ProductManager()


//llamo la método getProducts y devuelve array vacio
manager1.getProducts()


//llamo al método addProduct y crea un producto de prueba
manager1.addProduct({
    title: "producto prueba",
    description: "esto es un producto prueba",
    price: 200,
    thumbnail: "sin imagen",
    code: "abc123",    
    stock: 25
}) 


//llamo al método getProducts y muestra el producto de prueba
manager1.getProducts()


//llamo nuevamente a addProduct y arroja un error porque el código está repetido
manager1.addProduct({
    title: "producto prueba2",
    description: "esto es un segundo producto prueba",
    price: 200,
    thumbnail: "sin imagen 2",
    code: "abc123",    
    stock: 25
}) 


//llamo al método getProductById, le paso un id inexistente y me arroja un error
manager1.getProductById(3)

//llamo al método getProductById, le paso un id que sí existe, lo encuentra y me devuelve el producto
manager1.getProductById(1)

