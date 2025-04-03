import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosSensoresService } from './datos-sensores.service';
import { DatosSensoresController } from './datos-sensores.controller';
import { DatosSensor } from './datos-sensores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosSensor])],
  controllers: [DatosSensoresController],
  providers: [DatosSensoresService],
  exports: [DatosSensoresService],
})
export class DatosSensoresModule {}