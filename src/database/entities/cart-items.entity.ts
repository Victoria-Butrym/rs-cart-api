import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Carts } from './carts.entity';

@Entity()
export class CartItems {
    @OneToOne(() => Carts, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
    cart_id: string;
    
    @PrimaryColumn({type: 'uuid', nullable: false})
    product_id: string;

    @Column({ type: 'integer' })
    count: string;
}