import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParcelaBorrada } from './parcela-borrada.entity';

@Injectable()
export class ParcelasBorradasService {
  constructor(
    @InjectRepository(ParcelaBorrada)
    private parcelasBorradasRepository: Repository<ParcelaBorrada>,
  ) {}

  async findAll(): Promise<ParcelaBorrada[]> {
    return this.parcelasBorradasRepository.find({
      relations: ['parcela'],
    });
  }

  async registrarParcela(idParcela: number): Promise<ParcelaBorrada> {
    const parcelaBorrada = this.parcelasBorradasRepository.create({
      id_parcela_id: idParcela,
      fecha_eliminado: new Date(),
    });
    return this.parcelasBorradasRepository.save(parcelaBorrada);
  }
}