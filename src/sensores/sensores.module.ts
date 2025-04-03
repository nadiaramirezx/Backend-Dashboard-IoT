import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensoresService } from './sensores.service';
import { Sensor } from './sensor.entity';
import { SensoresController } from './sensores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sensor])],
  controllers: [SensoresController],
  providers: [SensoresService],
  exports: [SensoresService],
})
export class SensoresModule {}