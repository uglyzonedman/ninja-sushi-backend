import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoogleStrategy } from 'src/strategies/google.strategy';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService, GoogleStrategy],
})
export class AccountModule {}
