import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import SnakeNamingStrategy from 'typeorm-naming-strategy';

import { DataSource } from 'typeorm';
import { Carts } from './database/entities/carts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rds-cloud-x-database.cg2yqpysptpk.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cloud_x',
      entities: [Carts],
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
      // synchronize: true,
      // autoLoadEntities: true,
  }),
    CartModule,
    OrderModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
