import "reflect-metadata"
import * as dotenv from 'dotenv'
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"
import { Transactions } from "./entity/Transaction"

dotenv.config();
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSKEY,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Product, Transactions],
    migrations: [],
    subscribers: [],
})

