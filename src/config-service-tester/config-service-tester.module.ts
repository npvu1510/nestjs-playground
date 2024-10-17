import { Module } from '@nestjs/common';
import { ConfigServiceTesterController } from './config-service-tester.controller';
import { ConfigServiceTesterService } from './config-service-tester.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  // imports: [ConfigModule], không cần dùng tới nếu ConfigModule cấu hình isGlobal: true
  controllers: [ConfigServiceTesterController],
  providers: [ConfigServiceTesterService],
})
export class ConfigServiceTesterModule {}
