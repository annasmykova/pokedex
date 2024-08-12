import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {AppDataSource} from "./data-source";

async function bootstrap() {
  await AppDataSource.initialize();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent from the frontend
  });

  await app.listen(4000);
}
bootstrap();
