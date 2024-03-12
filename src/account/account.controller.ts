import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { IAccountTypeLogin } from './account.interface';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('create-account')
  async createAccount(@Body() dto: AccountDto) {
    return await this.accountService.createAccount(dto);
  }

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() dto: AccountDto) {
    return await this.accountService.login(dto);
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req, @Res() res) {
    const result: any = await this.accountService.googleLogin(req);
    console.log('result', result);
    if (result) {
      let user = {
        id: result.id,
        email: result.email,
      };
      const userString = JSON.stringify(user);
      res.cookie('user', userString, {});
      res.cookie('accessToken', result.accessToken);
    }

    res.redirect('http://localhost:3000');
  }

  @Get('get-profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: string) {
    return await this.accountService.getById(id);
  }

  @Put('update-profile')
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: AccountDto) {
    return await this.accountService.updateProfile(id, dto);
  }
}
