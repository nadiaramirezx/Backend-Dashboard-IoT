import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelasBorradasService } from './parcelas-borradas.service';
import { ParcelasBorradasController } from './parcelas-borradas.controller';
import { ParcelaBorrada } from './parcela-borrada.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParcelaBorrada])],
  controllers: [ParcelasBorradasController],
  providers: [ParcelasBorradasService],
  exports: [ParcelasBorradasService],
})
export class ParcelasBorradasModule {}