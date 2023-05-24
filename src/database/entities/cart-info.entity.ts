import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Carts } from './carts.entity';

@Entity()
export class CartInfo {
    @OneToOne(() => Carts, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
    @PrimaryColumn({type: 'uuid', nullable: false})
    cart_id: string;

    @Column({ type: 'text', nullable: false, generated: 'uuid' })
    product_id: string;

    @Column({ type: 'integer' })
    count: string;
}