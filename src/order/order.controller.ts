import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { OrderCreateDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post('/add')
  @Auth()
  async addToCart(
    @CurrentUser('id') accountId: string,
    @Body() dto: OrderCreateDto,
  ) {
    return this.orderService.createOrder(accountId, dto);
  }

  @Get('get')
  @Auth()
  async getOrders(@CurrentUser('id') accountId: string) {
    return this.orderService.getOrders(accountId);
  }

  @Get('get-by-id/:orderId')
  @Auth()
  async getOrderById(@Param('orderId') orderId: string) {
    return this.orderService.getOrderById(orderId);
  }
}
