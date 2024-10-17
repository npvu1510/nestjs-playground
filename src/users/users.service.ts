import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {
    console.log('Initializing UsersService');
  }
}
