import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { addProduct } from "./repositories/productRepository";

AppDataSource.initialize().then(async () => {
    console.log('Server running');

    await addProduct()

}).catch(error => console.log(error))

