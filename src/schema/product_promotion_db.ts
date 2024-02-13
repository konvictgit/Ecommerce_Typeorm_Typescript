import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class product_promotion extends BaseEntity{

    @PrimaryGeneratedColumn()
    product_promotion_id:number;

    @Column()
    product_id:string;

    @Column()
    promotion_id:string;

}