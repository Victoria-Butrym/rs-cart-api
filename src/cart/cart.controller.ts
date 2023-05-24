import { Controller, Get, Delete, Put, Body, Req, Post, HttpStatus, Param, Inject } from '@nestjs/common';
import { CartService } from './services';

@Controller('api/profile/cart')
export class CartController {

  @Inject(CartService)
    private readonly cartService: CartService;

  @Get()
  async findAllCarts() {
    const carts = await this.cartService.findAllCarts();

    return {
      statusCode: HttpStatus.OK,
      data: { carts }
    }
  }

  @Get(':id')
  async findCardById(@Param() params: any) {
    const { id } = params;
    const cart = await this.cartService.findCartById(id);
    return {
      statusCode: HttpStatus.OK,
      data: { cart }
    }
  }

  @Post()
  async createCart(@Body() body: any) {
      const cart = await this.cartService.create(JSON.parse(body));
      return {
          statusCode: HttpStatus.OK,
          body: { cart }
      }
  }

  @Delete(':id')
  async deleteCart(@Param() params: any) {
    const { id } = params;
    await this.cartService.deleteCart(id);

    return {
      statusCode: HttpStatus.OK,
      data: 'deleted successfully'
    }
  }
}
