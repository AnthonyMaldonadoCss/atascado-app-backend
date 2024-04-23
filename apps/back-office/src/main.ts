import { NestFactory } from '@nestjs/core';
import { BackOfficeModule } from './back-office.module';

async function bootstrap() {
  const app = await NestFactory.create(BackOfficeModule);
  await app.listen(3000);
}
bootstrap();
