import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// entry point of the app


async function bootstrap() {
  // create app
  const app = await NestFactory.create(AppModule);
  // make it listen
  await app.listen(3000);
}


bootstrap();
