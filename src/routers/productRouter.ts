import { AppDataSource } from '../data-source';
// import { Product } from '../entity/Product';
import express from 'express'
import { addProduct, getProduct, searchByProductId, searchProduct } from '../repositories/productRepository';

const productRouter = express.Router();

productRouter.use(express.json())

productRouter.get('/', async (req: any, res: any) => {
    try {
        console.log("entered the get productRouter")
        const products = await getProduct();
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
    catch(error){
        console.log('error', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

productRouter.get('/user/:id', async (req:any, res:any) => {
    try {
        const idSearch = parseInt(req.params.id);
        const primaryId = await searchByProductId(idSearch);
        res.status(200).json(primaryId);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

productRouter.post('/user', async (req: any, res: any) => {
    try {
        const products = await addProduct(req.body.username, req.body.description, req.body.price, req.body.stock);
        res.status(201).json(products)
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

export {productRouter};
