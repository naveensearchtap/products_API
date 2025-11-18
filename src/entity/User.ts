import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Transactions } from "./Transaction"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({unique: true, length: 100})
    card_number: string

    @OneToMany(
        () => Transactions,
        (transactions) => transactions.user 
    )
    transactions: Transactions[]
}
