import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Library project with NestJs + ReactJs (BookStore WebApp)';
  }
}
