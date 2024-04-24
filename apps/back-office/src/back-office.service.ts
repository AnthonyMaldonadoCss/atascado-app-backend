import { Injectable } from '@nestjs/common';

@Injectable()
export class BackOfficeService {
  getHello(): string {
    return 'Hello World!';
  }
}
