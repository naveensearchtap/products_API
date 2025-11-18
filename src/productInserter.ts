import { Product } from "./entity/Product";
import { AppDataSource } from "./data-source";

const product = new Product();

product.name = "Tommy Hilfiger T-Shirt"
product.price = 49.99
product.description = 'High quality cottom'
product.isInStock = true
product.product_id = 1234

async function initFunction(){
    await AppDataSource.manager.save(product)
    console.log("Photo has been saved. product id", product.product_id);
    const savedPhotos = await AppDataSource.manager.find(Product)
    console.log("All product from the db: ", savedPhotos)
}

initFunction();
