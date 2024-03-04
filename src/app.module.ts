import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './account/account.module';
import { GoogleStrategy } from './strategies/google.strategy';
import { ProductModule } from './product/product.module';
import { CookieParserMiddleware } from 'cookie-parser';

@Module({
  imports: [PrismaModule, AccountModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CookieParserMiddleware).forRoutes('*');
  }
}
