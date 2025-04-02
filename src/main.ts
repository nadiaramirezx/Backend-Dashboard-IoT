import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS igual que en tu Express
  app.enableCors();
  
  await app.listen(8080);
  console.log(`Servidor corriendo en http://localhost:8080`);
}
bootstrap();