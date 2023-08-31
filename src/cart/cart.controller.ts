import { Controller, Get, Delete, Put, Body, Req, Post, HttpStatus, Param, Inject } from '@nestjs/common';
import { CartService } from './services';

@Controller('api/profile/cart')
export class CartController {

  @Inject(CartService)
    private readonly cartService: CartService;

  @Get()
  async findAllCarts() {
    try {
      const carts = await this.cartService.findAllCarts();

      return carts 
        ? { statusCode: HttpStatus.OK, data: { carts } }
        : { statusCode: HttpStatus.NOT_FOUND, error: 'not found!' }

    } catch ({ message }) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: message
      }
    }
  }

  @Get(':id')
  async findCardById(@Param() params: any) {
    try {
      const { id } = params;
      const cart = await this.cartService.findCartById(id);

      return cart
        ? { statusCode: HttpStatus.OK, data: { cart } }
        : { statusCode: HttpStatus.NOT_FOUND, error: 'not found!' }

    } catch ({ message }) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: message
      }
    }
  }

  @Post()
  async createCart(@Body() body: any) {
    try {
      const response = await this.cartService.create(JSON.parse(body));

      return response
        ? { statusCode: HttpStatus.OK, data: response }
        : { statusCode: HttpStatus.BAD_REQUEST, error: 'bad request!' }

    } catch ({ message }) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `creation failed! ${message}`
      }
    }
  }

  @Delete(':id')
  async deleteCart(@Param() params: any) {
    try {
      const { id } = params;
      await this.cartService.deleteCart(id);

      return {
        statusCode: HttpStatus.OK,
        data: 'deleted successfully'
      }
    } catch ({ message }) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: message
      }
    }
  }
}
