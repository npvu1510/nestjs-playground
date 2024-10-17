import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  findMany() {
    return 'Find many users';
  }
}
