import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}