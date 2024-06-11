import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //now the app will use validation pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true //bloqueia parametros que não estão na classe
  }));
  await app.listen(3333);
}
bootstrap();