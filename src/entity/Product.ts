import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    // Primary Key
    @PrimaryGeneratedColumn()
    product_id: number
    
    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column({ default: true })
    isInStock: boolean
}