import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';

import * as joi from 'joi';
import { ConfigServiceTesterModule } from './config-service-tester/config-service-tester.module';

import { config as dotenvConfig } from 'dotenv';
dotenvConfig({});

// configs
import appConfig from './config/app-config';
import dbConfig from './config/db-config';
import jwtConfig from './config/jwt-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig, jwtConfig],
      validationSchema: joi.object({
        PORT: joi.number().required(),
        NODE_ENV: joi.string().required(),
      }),
      validationOptions: {
        abortEarly: true,
      },
    }),
    UsersModule,
    ConfigServiceTesterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
