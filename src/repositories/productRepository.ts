import { Product } from "../entity/Product";
import { AppDataSource } from "../data-source";
import { Like } from "typeorm";

async function addProduct(username: string, description: string, price: number, isStock: boolean){
    
    const product = new Product();

    product.name = username;
    product.price = price
    product.description = description
    product.isInStock = isStock;
     
    const productRepository = AppDataSource.getRepository(Product);

    await productRepository.save(product);
    console.log("product SAVED !!!!");

    const savedProduct = await productRepository.find()
    console.log("All products are saved in the db", savedProduct);
}

// this function will go tho the repositories 
async function getProduct(){
    const productRepository = AppDataSource.getRepository(Product);

    return await productRepository.find()
    // console.log("All products are saved in the db", savedProduct);
}

async function searchProduct(userSearch: string){
    const productRepository = AppDataSource.getRepository(Product);
    // using here the extended functionality of the custom repository.
    console.log("All products are saved in the db", searchProduct);
    return await productRepository.find({ where: {name: Like(`%${userSearch}%`)}})
    // return await productRepository.extend({
    //     findByName(username: string){
    //         return this.createQueryBuilder("product")
    //             .where("product.username = :username", { username })
    //             .getMany()
    //     },
    // })
    
}

async function searchByProductId(userId: number){
    const productRepository = AppDataSource.getRepository(Product);
    // using here the extended functionality of the custom repository.
    console.log("All products are saved in the db with id");
    return await productRepository.findOneBy({product_id: userId})
}

export {addProduct, getProduct, searchProduct, searchByProductId}