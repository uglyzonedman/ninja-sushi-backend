import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google login';
    }
    return {
      message: 'User info from google login',
      user: req.user,
    };
  }
}
