import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  if (process.env.NODE_ENV !== 'production') {
    app.useStaticAssets(join(__dirname, '..', '..', 'frontend', 'dist', 'frontend'));
  } else {
    app.useStaticAssets(join(__dirname, 'public'))
  }
  await app.listen(80);
}
bootstrap();
