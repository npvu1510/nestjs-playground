import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  JWT_SECRET_KEY: 'jwtSecret',
  JWT_EXPIRES: '7d',

  SHARED_ENV_VARIABLES: 'shared-from-jwt',
}));
