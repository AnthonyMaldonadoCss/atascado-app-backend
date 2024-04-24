import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  await app.listen(process.env.AUTH_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
