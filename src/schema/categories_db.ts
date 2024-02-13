import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn, OneToMany } from "typeorm";
import { Product } from "./product.db";

@Entity()
export class Categories extends BaseEntity{

    @PrimaryGeneratedColumn()
    category_id:number;

    @Column()
    name:string;

    @Column({
        type:"varchar"
    })
    description:string;

    @OneToMany(()=>Product,(product)=>product.categories)
    products:Product[]

}