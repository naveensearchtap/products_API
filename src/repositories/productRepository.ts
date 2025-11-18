import { Product } from "../entity/Product";
import { AppDataSource } from "../data-source";

export async function addProduct(){
    
    const product = new Product();

    product.name = "Tommy Hilfiger T-Shirt"
    product.price = 4999
    product.description = 'High quality cottom'
    product.isInStock = true
     product.product_id = 1234

    const productRepository = AppDataSource.getRepository(Product);

    await productRepository.save(product);
    console.log("product SAVED !!!!");

    const savedProduct = await productRepository.find()
    console.log("All products are saved in the db", savedProduct);
}
