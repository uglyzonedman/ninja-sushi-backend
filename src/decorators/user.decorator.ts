import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Account } from '@prisma/client';

export const CurrentUser = createParamDecorator(
  (data: keyof Account, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user[data] : user;
  },
);
