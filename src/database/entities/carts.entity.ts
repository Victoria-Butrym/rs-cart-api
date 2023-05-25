import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { CartItems } from "./cart-items.entity";

enum CartStatus {
    ORDERED = 'ORDERED',
    OPEN = 'OPEN'
}

@Entity()
export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    user_id: string;

    @Column({ type: 'date', nullable: false })
    created_at: string;

    @Column({ type: 'date', nullable: false })
    updated_at: number;

    @Column({ type: 'enum', enum: CartStatus })
    status: CartStatus;

    @OneToOne(() => CartItems, (cartInfo) => cartInfo.cart_id, { onDelete: "CASCADE" })
    @JoinTable()
    cart_info: CartItems;
}
