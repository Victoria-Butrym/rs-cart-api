import { Injectable } from '@nestjs/common';
import { Carts } from 'src/database/entities/carts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CartItems } from 'src/database/entities/cart-items.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Carts)
        private cartRepository: Repository<Carts>,
    @InjectRepository(CartItems)
        private cartItemsRepository: Repository<CartItems>,
        private dataSource: DataSource
  ) {}

  async findAllCarts() {
    return this.cartRepository.find();
  }

  async findCartById(id: string) {
    return await this.cartRepository.findOne({
      where: { id },
      relations: { cart_info: true }
    });
  }

  async create(body: any) {
    const { user_id, created_at, updated_at, count, status } = body;
    let cart;
    let cartItem;
    try {
        await this.dataSource.transaction(async manager => {
            cart = await manager.save(Carts, {
                user_id,
                created_at,
                updated_at,
                status,
            })

            cartItem = await manager.save(CartItems, {
              cart_id: cart.id,
              count
            })
        })
        
        return { cart, cartItem };
    } catch ({ message }) {
        return false;
    }
  }

  async deleteCart(id: string) {
    await this.cartItemsRepository.delete({ cart_id: id });
    return this.cartRepository.delete({ id })
  }
}

