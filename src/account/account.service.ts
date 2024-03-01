import { IAccountTypeLogin } from './account.interface';
import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AccountDto } from './dto/account.dto';
import { hash, verify } from 'argon2';

@Injectable()
export class AccountService {
  constructor(private prismaService: PrismaService) {}

  async createAccount(account: AccountDto) {
    const oldUser = await this.prismaService.account.findUnique({
      where: {
        email: account.email,
      },
    });

    if (oldUser) {
      throw new BadRequestException('Данная почта занята');
    }

    const newUser = await this.prismaService.account.create({
      data: {
        email: account.email,
        password: await hash(account.password),
        login: account.login,
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
    };
  }

  async login(dto: AccountDto) {
    let user;

    if (dto.email.includes('@')) {
      user = await this.prismaService.account.findUnique({
        where: {
          email: dto.email,
        },
      });
    } else {
      user = await this.prismaService.account.findUnique({
        where: {
          login: dto.email,
        },
      });
    }
    if (!user) {
      throw new HttpException('Данные неверные', HttpStatus.UNAUTHORIZED);
    }
    const checkPass = await verify(user.password, dto.password);
    if (!checkPass) {
      throw new HttpException('Неверный пароль', HttpStatus.FORBIDDEN);
    }
    return {
      id: user.id,
      email: user.email,
    };
  }
  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google login';
    }
    const user = await this.prismaService.account.findUnique({
      where: {
        email: req.user.email,
      },
    });

    console.log('id', req.user.id);

    if (user) {
      const checkGoogleId = await this.prismaService.account.findUnique({
        where: { google_id: req.user.google_id },
      });
      if (checkGoogleId) {
        return {
          message: 'Все отлично, авторизован',
        };
      } else {
        const newUser = await this.prismaService.account.update({
          where: {
            id: user.id,
          },
          data: {
            google_id: req.user.google_id,
          },
        });

        return {
          message: 'Данные обновлены',
        };
      }
    } else {
      return await this.prismaService.account.create({
        data: {
          email: req.user.email,
          google_id: req.user.google_id,
        },
      });
    }
  }
}
