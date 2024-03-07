import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prismaService: PrismaService) {}
  async getAll() {
    const res = await this.prismaService.productIngredient.findMany({});
    return {
      items: res,
    };
  }
}
