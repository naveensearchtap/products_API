import { AppDataSource } from "./data-source"
// import { addProduct } from "./repositories/productRepository";
import { app, PORT } from "./server";

// AppDataSource.initialize returns an object so we can have it have promise chaining.
AppDataSource.initialize()
    .then(async () => {
        console.log('Database Connected !!!!');
        // await addProduct();

        app.listen(PORT, ()=> {
            console.log(`Server running at ${PORT}`)
        })
    })
    .catch(error => console.log(error))

