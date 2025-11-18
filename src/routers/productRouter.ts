import { AppDataSource } from '../data-source';
// import { Product } from '../entity/Product';
import express from 'express'
import { addProduct, getProduct, searchByProductId, searchProduct } from '../repositories/productRepository';

const productRouter = express.Router();

productRouter.use(express.json())

// class Product {
//     productID: number;
//     userName: string;
//     description: string;
//     price: number;
//     isStock: boolean;

//     constructor(productID: number, username: string, description: string, price: number, isStock: boolean){
//         this.productID = productID;
//         this.userName = username;
//         this.description = description;
//         this.price = price;
//         this.isStock = isStock;
//     }
// }

productRouter.get('/', async (req: any, res: any) => {
    try {
        console.log("entered the get productRouter")
        const products = await getProduct();
        // initialized the getProducts from the repository
        // res.status(200).json(getProduct);
        // getProducts will send the function rather than results
        res.status(200).json(products)
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

productRouter.get('/username/:user', async(req:any, res: any) => {
    try{
        const userSearch = req.params.user;
        console.log("GET/ search for the specific product initialized")
        const product = await searchProduct(userSearch);
        res.status(200).json(product); 
    }
    catch(err){
        console.error(err)
        console.log("not working ")
    }
    
})

productRouter.get('/user/:id', async (req:any, res:any) => {
    const idSearch = parseInt(req.params.id);
    const primaryId = await searchByProductId(idSearch);
    res.status(200).json(primaryId);
})

productRouter.post('/user', async (req: any, res: any) => {
    try {
        console.log("entered the POST/ new user")
        const products = await addProduct(req.body.username, req.body.description, req.body.price, req.body.stock);
        res.status(201).json(products)
        // status code for created
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

export {productRouter};
