import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
