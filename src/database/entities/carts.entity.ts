import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, OneToMany, ManyToOne } from "typeorm"
// import { CartInfo } from './cart-info.entity';
// import { ECartStatus } from '../../cart/models/cart.model';
// import { Orders } from './orders.entity';
// import { Users } from './user.entity';

enum CartStatus {
    ORDERED = 'ORDERED',
    OPEN = 'OPEN'
}

@Entity()
export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date', nullable: false })
    created_at: string;

    @Column({ type: 'date', nullable: false })
    updated_at: number;

    @Column({ type: 'enum', enum: CartStatus })
    status: CartStatus;

    // @OneToOne(() => CartInfo, (cartInfo) => cartInfo.cart_id, { onDelete: "CASCADE" })
    // @JoinTable()
    // cart_info: CartInfo;

    // @OneToMany(() => Orders, (order) => order.cart)
    // order: Orders[];

    // @ManyToOne(() => Users, (user) => user)
    // user: Users;
}