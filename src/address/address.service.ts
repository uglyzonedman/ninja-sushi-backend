import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createAddress(dto: AddressDto, accountId: string) {
    return await this.prisma.address.create({
      data: {
        entrance: dto.entrance,
        flat: dto.flat,
        floor: dto.floor,
        street: dto.street,
        streetNumber: dto.streetNumber,
        Account: { connect: { id: accountId } },
      },
    });
  }
  async getByUser(accountId: string) {
    const res = await this.prisma.address.findMany({ where: { accountId } });

    return {
      items: res,
    };
  }

  async delete(id: string) {
    return await this.prisma.address.delete({ where: { id } });
  }
}
