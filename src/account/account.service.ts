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
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(
    private prismaService: PrismaService,
    private jwt: JwtService,
  ) {}
  createToken(userId: string, email: string) {
    const data = {
      id: userId,
      email,
    };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '14d',
      secret: process.env.JWT_SECRET,
    });

    return { accessToken };
  }
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

    const tokens = await this.createToken(user.id, user.email);
    return {
      id: user.id,
      email: user.email,
      accessToken: tokens.accessToken,
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

    if (user) {
      const checkGoogleId = await this.prismaService.account.findUnique({
        where: { google_id: req.user.google_id },
      });
      if (checkGoogleId) {
        const tokens = await this.createToken(
          checkGoogleId.id,
          checkGoogleId.email,
        );
        return {
          id: checkGoogleId.id,
          email: checkGoogleId.email,
          accessToken: tokens.accessToken,
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
        const tokens = await this.createToken(newUser.id, newUser.email);
        return {
          id: newUser.id,
          email: newUser.email,
          accessToken: tokens.accessToken,
        };
      }
    } else {
      const newUser = await this.prismaService.account.create({
        data: {
          email: req.user.email,
          google_id: req.user.google_id,
        },
      });
      const tokens = await this.createToken(newUser.id, newUser.email);
      return {
        id: newUser.id,
        email: newUser.email,
        accessToken: tokens.accessToken,
      };
    }
  }

  async getById(id: string) {
    const res = await this.prismaService.account.findUnique({
      where: {
        id,
      },
    });

    return {
      account: res,
    };
  }

  async updateProfile(accountId: string, dto: AccountDto) {
    return await this.prismaService.account.update({
      where: {
        id: accountId,
      },
      data: {
        login: dto.login,
      },
    });
  }
}
