import { Module } from '@nestjs/common';
import { Carts } from 'src/database/entities/carts.entity';

import { OrderModule } from '../order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ TypeOrmModule.forFeature([Carts]) ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
