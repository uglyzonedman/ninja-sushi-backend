import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}
  async addToCart(productId: string, accountId: string) {
    const existingCart = await this.prismaService.cart.findFirst({
      where: {
        productId,
        accountId,
      },
    });

    if (existingCart) {
      const res = this.prismaService.cart.update({
        where: {
          id: existingCart.id,
        },
        data: {
          quantity: existingCart.quantity + 1,
        },
        select: {
          Product: {
            select: {
              id: true,
              name: true,
              price: true,
              description: true,
              photoPath: true,
              volume: true,
              type: true,
              weight: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
      return res;
    }

    const res = this.prismaService.cart.create({
      data: {
        productId,
        accountId,
        quantity: 1,
      },
      select: {
        Product: {
          select: {
            id: true,
            name: true,
            price: true,
            description: true,
            photoPath: true,
            volume: true,
            type: true,
            weight: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    return res;
  }

  async incrementCartItem(cartItemId: string) {
    return this.prismaService.cart.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
  }

  async decrementCartItem(cartItemId: string) {
    const cartItem = await this.prismaService.cart.findUnique({
      where: {
        id: cartItemId,
      },
    });

    if (cartItem.quantity === 1) {
      await this.prismaService.cart.delete({
        where: {
          id: cartItemId,
        },
      });
      return null;
    }

    return this.prismaService.cart.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
  }

  async getCartItems(accountId: string) {
    const res = await this.prismaService.cart.findMany({
      where: {
        accountId: accountId,
      },
      select: {
        accountId: true,
        createdAt: true,
        quantity: true,
        updatedAt: true,
        id: true,
        productId: true,
        Product: {
          select: {
            id: true,
            name: true,
            price: true,
            description: true,
            photoPath: true,
            volume: true,
            type: true,
            weight: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });

    return {
      items: res,
    };
  }

  async removeCartItem(cartItemId: string) {
    await this.prismaService.cart.delete({
      where: {
        id: cartItemId,
      },
    });
  }

  async removeAllCartItems(accountId: string) {
    await this.prismaService.cart.deleteMany({
      where: {
        accountId: accountId,
      },
    });
  }
}
