import { Module } from '@nestjs/common';
import { BackOfficeController } from './back-office.controller';
import { BackOfficeService } from './back-office.service';

@Module({
  imports: [],
  controllers: [BackOfficeController],
  providers: [BackOfficeService],
})
export class BackOfficeModule {}
