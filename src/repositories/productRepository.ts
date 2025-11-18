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
}

async function getProduct(){
    const productRepository = AppDataSource.getRepository(Product);
    return await productRepository.find()
}

async function searchProduct(userSearch: string){
    const productRepository = AppDataSource.getRepository(Product);
    return await productRepository.find({ where: {name: Like(`%${userSearch}%`)}})
}

async function searchByProductId(userId: number){
    const productRepository = AppDataSource.getRepository(Product);
    return await productRepository.findOneBy({product_id: userId})
}

export {addProduct, getProduct, searchProduct, searchByProductId}