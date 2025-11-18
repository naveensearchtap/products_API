import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
    // Primary Key
    // lets say you want your id column to be auto-generated (this is known as auto-increment / sequence / serial / generated identity then use PrimaryGeneratorColumn
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

    // @CreateDateColumn()
    // created_at: number
}