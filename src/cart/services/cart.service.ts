import { Injectable } from '@nestjs/common';
import { Carts } from 'src/database/entities/carts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

import { v4 } from 'uuid';

import { Cart } from '../models';
import { CartInfo } from 'src/database/entities/cart-info.entity';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Carts)
        private cartRepository: Repository<Carts>,
        private dataSource: DataSource
  ) {}

  async findAllCarts() {
    return this.cartRepository.find();
  }

  async findCartById(id: string) {
    return this.cartRepository.findOne({
      where: { id },
      // relations: { cart_info: true }
  });
  }

  async create(body: any) {
    const { user_id, created_at, updated_at, count, status } = body;
    let cart;
    try {
        await this.dataSource.transaction(async manager => {
            cart = await manager.save(Carts, {
                user_id,
                created_at,
                updated_at,
                status,
            })
        })
        return cart;
    } catch (e) {
        return 'cart creation failed!';
    }
  }

  async deleteCart(id: string) {
    return this.cartRepository.delete({ id })
  }
}

