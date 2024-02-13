import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,ManyToOne,UpdateDateColumn } from "typeorm";
import { Categories } from "./categories_db";

@Entity()
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    product_id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    price:string;

    @Column()
    stock:string;

    @Column()
    category_id:string;

    @Column()
    img_url:string;

    @ManyToOne(()=>Categories,(categories)=> categories.products)
    categories:Categories

}