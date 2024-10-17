import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  PORT: parseInt(process.env.PORT) + 10 || 4000,
  NODE_ENV: 'production',
  SHARED_ENV_VARIABLES: 'shared-from-jwt',
}));
