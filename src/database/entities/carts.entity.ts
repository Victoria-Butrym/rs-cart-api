import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, JoinColumn, OneToMany, ManyToOne } from "typeorm"
import { CartInfo } from "./cart-info.entity";
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

    @Column({ type: 'uuid', nullable: false })
    user_id: string;

    @Column({ type: 'date', nullable: false })
    created_at: string;

    @Column({ type: 'date', nullable: false })
    updated_at: number;

    @Column({ type: 'enum', enum: CartStatus })
    status: CartStatus;

    // @OneToOne(() => CartInfo, (cartInfo) => cartInfo.cart_id, { onDelete: "CASCADE" })
    // @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
    // cart_info: CartInfo;
}
