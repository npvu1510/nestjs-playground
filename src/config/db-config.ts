import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  TYPE: 'mysql',
  HOST: 'localhost',
  PORT: 3306,
  USERNAME: 'your_username',
  PASSWORD: 'your_password',
  DATABASE: 'your_database',

  SHARED_ENV_VARIABLES: 'shared-from-db',
}));
