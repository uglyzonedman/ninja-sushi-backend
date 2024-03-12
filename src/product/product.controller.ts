import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  Get,
  Param,
  Body,
  Res,
  HttpStatus,
  Put,
  Query,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { Response } from 'express';
import { ProductService } from './product.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAll(
    @Query('type') type: string,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return await this.productService.getAllProducts(type, +limit, +page);
  }

  @Get('file/:folder/:filename')
  getFile(
    @Param('folder') folder: string,
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const file = path.join(folder, filename);
    res.sendFile(file, { root: 'uploads/products' });
  }

  @Get('by-id/:productId')
  async getById(@Param('productId') productId: string) {
    return await this.productService.getById(productId);
  }

  @Put('change-favorite/:productId')
  @Auth()
  async changeFavorite(
    @CurrentUser('id') id: string,
    @Param('productId') productId: string,
  ) {
    return await this.productService.changeFavorite(id, productId);
  }

  @Get('get-favorite-by-id')
  @Auth()
  async getFavoriteById(@CurrentUser('id') id: string) {
    return await this.productService.getFavoriteById(id);
  }
}
