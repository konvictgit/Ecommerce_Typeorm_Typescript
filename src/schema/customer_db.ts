import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class customer extends BaseEntity{

    @PrimaryGeneratedColumn()
    customer_id:number;

    @Column()
    name:string;

    @Column({
        unique:true
    })
    email:string;

    @Column({
        length:10
    })
    phone_number:string;

    @Column()
    address:string;

}