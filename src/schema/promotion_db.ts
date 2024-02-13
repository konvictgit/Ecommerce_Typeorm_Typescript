import { BaseEntity,PrimaryGeneratedColumn, Entity,Column,PrimaryColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class promotion extends BaseEntity{

    @PrimaryGeneratedColumn()
    promotion_id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    discount_type:string;

    @Column()
    discount_value:string;

    @Column()
    start_date:string;

    @Column()
    end_date:string;

}