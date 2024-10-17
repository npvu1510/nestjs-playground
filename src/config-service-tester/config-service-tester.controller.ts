import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import jwtConfig from 'src/config/jwt-config';

@Controller('config-service-tester')
export class ConfigServiceTesterController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig() {
    const configService = new ConfigService({
      JWT_SECRET_KEY: 'jwtSecret',
      JWT_EXPIRES: '7d',

      SHARED_ENV_VARIABLES: 'shared-from-jwt',
    });
    console.log(configService);
    return configService;
  }
}
