import { Controller, Get } from '@nestjs/common';
import { BackOfficeService } from './back-office.service';

@Controller()
export class BackOfficeController {
  constructor(private readonly backOfficeService: BackOfficeService) {}

  @Get()
  getHello(): string {
    return this.backOfficeService.getHello();
  }
}
