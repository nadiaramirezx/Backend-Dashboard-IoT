import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');

  app.enableCors();
  
  const PORT = process.env.PORT || 3000;

  await app.listen(3000);
  console.log(`Api corriendo en http://localhost:${PORT}/api`);
}
bootstrap();