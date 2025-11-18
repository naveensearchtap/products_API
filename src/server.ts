import express from 'express';

import { productRouter } from './routers/productRouter';

const app = express();
const PORT = 8080;

app.use(express.json())
app.get('/', (req:any, res:any) => {
    res.send(`<h1>Welcome the the documented API</h1>`)
})
app.use('/users', productRouter) 


export {PORT, app}