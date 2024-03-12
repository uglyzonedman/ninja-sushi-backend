import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderCreateDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(accountId: string, dto: OrderCreateDto) {
    const cartItems = await this.prismaService.cart.findMany({
      where: {
        accountId: accountId,
      },
      include: {
        Product: true,
      },
    });
    const orderItems = cartItems.map((cartItem) => ({
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      price: cartItem.Product.price,
    }));
    const createdOrder = await this.prismaService.order.create({
      data: {
        accountId,
        name: dto.name,
        phoneNumber: dto.phoneNumber,
        addressId: dto.addressId,
        comment: dto.comment,
        typePayment: dto.typePayment,
        status: dto.status,
        typeDelivery: dto.typeDelivery,
        leaveItAtTheDoor: dto.leaveItAtTheDoor,
        dontRingTheDoorbell: dto.dontRingTheDoorbell,
        OrderItem: {
          createMany: {
            data: orderItems,
          },
        },
      },
      select: {
        Address: {
          select: {
            entrance: true,
            flat: true,
            floor: true,
            street: true,
            streetNumber: true,
          },
        },
        accountId: true,
        comment: true,
        createdAt: true,
        id: true,
        leaveItAtTheDoor: true,
        name: true,
        phoneNumber: true,
        dontRingTheDoorbell: true,
        status: true,
        typeDelivery: true,
        typePayment: true,
        totalSum: true,
      },
    });
    await this.prismaService.cart.deleteMany({
      where: {
        accountId,
      },
    });
    return createdOrder;
  }

  async getOrders(accountId: string) {
    const res = await this.prismaService.order.findMany({
      where: {
        accountId,
      },
      select: {
        Address: {
          select: {
            entrance: true,
            flat: true,
            floor: true,
            street: true,
            streetNumber: true,
          },
        },
        accountId: true,
        comment: true,
        createdAt: true,
        id: true,
        leaveItAtTheDoor: true,
        name: true,
        phoneNumber: true,
        dontRingTheDoorbell: true,
        status: true,
        typeDelivery: true,
        typePayment: true,
        totalSum: true,
        OrderItem: {
          select: {
            createdAt: true,
            id: true,
            price: true,
            quantity: true,
            updatedAt: true,
            Product: {
              select: {
                description: true,
                createdAt: true,
                photoPath: true,
                id: true,
                name: true,
                price: true,
                type: true,
                updatedAt: true,
                volume: true,
                weight: true,
              },
            },
          },
        },
      },
    });

    return {
      items: res,
    };
  }
  async getOrderById(orderId: string) {
    return this.prismaService.order.findUnique({
      where: {
        id: orderId,
      },
      select: {
        Address: {
          select: {
            entrance: true,
            flat: true,
            floor: true,
            street: true,
            streetNumber: true,
          },
        },
        accountId: true,
        comment: true,
        createdAt: true,
        id: true,
        leaveItAtTheDoor: true,
        name: true,
        phoneNumber: true,
        dontRingTheDoorbell: true,
        status: true,
        typeDelivery: true,
        typePayment: true,
        totalSum: true,
        OrderItem: {
          select: {
            createdAt: true,
            id: true,
            price: true,
            quantity: true,
            updatedAt: true,
            Product: {
              select: {
                description: true,
                createdAt: true,
                photoPath: true,
                id: true,
                name: true,
                price: true,
                type: true,
                updatedAt: true,
                volume: true,
                weight: true,
              },
            },
          },
        },
      },
    });
  }
}
