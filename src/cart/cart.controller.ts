import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post('/add/:productId')
  @Auth()
  async addToCart(
    @CurrentUser('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.addToCart(productId, userId);
  }

  @Get('all')
  @Auth()
  async getCartItems(@CurrentUser('id') userId: string) {
    return this.cartService.getCartItems(userId);
  }

  @Put('/increment/:cartItemId')
  @Auth()
  async incrementCartItem(@Param('cartItemId') cartItemId: string) {
    return this.cartService.incrementCartItem(cartItemId);
  }

  @Put('/decrement/:cartItemId')
  @Auth()
  async decrementCartItem(@Param('cartItemId') cartItemId: string) {
    return this.cartService.decrementCartItem(cartItemId);
  }

  @Delete('delete-by-id/:cartItemId')
  @Auth()
  async removeCartItem(@Param('cartItemId') cartItemId: string) {
    return this.cartService.removeCartItem(cartItemId);
  }

  @Delete('delete-all')
  @Auth()
  async removeAllCartItems(@CurrentUser('id') userId: string) {
    return this.cartService.removeAllCartItems(userId);
  }
}
