import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function NestApp() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
NestApp();
