import { NestFactory } from '@nestjs/core';
import { BackOfficeModule } from './back-office.module';

async function bootstrap() {
  const app = await NestFactory.create(BackOfficeModule);
  await app.listen(process.env.BACK_OFFICE_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
