import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelasService } from './parcelas.service';
import { ParcelasController } from './parcelas.controller';
import { Parcela } from './parcela.entity';
import { ParcelasBorradasModule } from '../parcelas-borradas/parcelas-borradas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parcela]),
    ParcelasBorradasModule
  ],
  controllers: [ParcelasController],
  providers: [ParcelasService],
  exports: [ParcelasService],
})
export class ParcelasModule {}