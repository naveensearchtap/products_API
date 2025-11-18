import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum TransitionTypes {
    DEPOSIT = 'deposit',
    WITHDRAWL = 'withdrawl'
}

@Entity()
export class Transactions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: TransitionTypes
    })
    type: string

    @Column()
    amount: number

    @ManyToOne (
        () => User,
        (user) => user.transactions
    )
    user: User
    
    
}