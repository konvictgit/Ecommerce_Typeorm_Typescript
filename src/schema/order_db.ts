import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class order extends BaseEntity{

    @PrimaryGeneratedColumn()
    order_id:number;

    @Column()
    customer_id:string;

    @Column()
    order_date:string;

    @Column()
    order_status:string;

    @Column()
    total_amount:string;

}