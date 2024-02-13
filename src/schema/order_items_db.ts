import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class order_items extends BaseEntity{

    @PrimaryGeneratedColumn()
    order_item_id:number;

    @Column()
    order_id:string;

    @Column()
    product_id:string;

    @Column()
    quantity:string;

    @Column()
    price:string;

}