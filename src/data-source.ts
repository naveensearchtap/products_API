import "reflect-metadata"
import * as dotenv from 'dotenv'
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"
import { Transactions } from "./entity/Transaction"

dotenv.config();
// process.env always gives string
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSKEY,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true, // make sure sync is there between entites and database
    logging: false, // enable/disable logging queries and errors
    entities: [User, Product, Transactions],
    migrations: [],
    subscribers: [],
})

