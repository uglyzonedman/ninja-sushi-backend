import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { AddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  async create(@CurrentUser('id') userId: string, @Body() dto: AddressDto) {
    return await this.addressService.createAddress(dto, userId);
  }

  @Get('get-for-user')
  @Auth()
  async getAdrressForUser(@CurrentUser('id') userId: string) {
    return await this.addressService.getByUser(userId);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.addressService.delete(id);
  }
}
