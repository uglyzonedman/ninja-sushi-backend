import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '92172138376-8tajkeefn35vp2ap7ntendsbb3m6r2eh.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8080/api-v2/account/auth/google/callback',
      scope: ['profile', 'email'],
    });
  }
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;
    console.log('profile', profile);
    const user = {
      provider: 'google',
      google_id: id,
      email: emails[0].value,
      name: name.givenName,
      surname: name.familyName,
      picture: photos[0].value,
    };

    done(null, user);
  }
}
