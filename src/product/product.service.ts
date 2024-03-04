import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async getAllProducts(type: string, limit: number = 8, page: number = 1) {
    const skip = (page - 1) * limit;

    const products = await this.prismaService.product.findMany({
      where: {
        type: type,
      },
      take: limit,
      skip: skip,
    });

    const totalProducts = await this.prismaService.product.count({
      where: {
        type: type,
      },
    });

    const totalPages = Math.ceil(totalProducts / limit);

    return {
      items: products,
      page: page,
      total: totalProducts,
      totalPages: totalPages,
    };
  }

  async getById(productId: string) {
    const result = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!result) {
      throw new Error(`Product ${productId} not found`);
    }
    return {
      item: result,
    };
  }

  async changeFavorite(accountId: string, productId: string) {
    const productsFavoriteByUserId = await this.prismaService.favorite.findMany(
      {
        where: {
          Account: {
            id: accountId,
          },
        },
      },
    );

    const findProduct = productsFavoriteByUserId.find(
      (product) => product.productId == productId,
    );

    if (findProduct) {
      await this.prismaService.favorite.delete({
        where: {
          id: findProduct.id,
        },
      });
    } else {
      await this.prismaService.favorite.create({
        data: {
          Account: {
            connect: {
              id: accountId,
            },
          },
          Product: {
            connect: {
              id: productId,
            },
          },
        },
      });
    }
  }

  async getFavoriteById(accountId: string) {
    const res = await this.prismaService.favorite.findMany({
      where: {
        Account: {
          id: accountId,
        },
      },
    });

    return {
      items: res,
    };
  }
}
