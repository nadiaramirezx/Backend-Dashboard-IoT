import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parcela } from './parcela.entity';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { ParcelasBorradasService } from '../parcelas-borradas/parcelas-borradas.service';

@Injectable()
export class ParcelasService {
  constructor(
    @InjectRepository(Parcela)
    private parcelasRepository: Repository<Parcela>,
    private parcelasBorradasService: ParcelasBorradasService,
  ) {}

  async create(createParcelaDto: CreateParcelaDto): Promise<Parcela> {
    const parcela = this.parcelasRepository.create(createParcelaDto);
    return this.parcelasRepository.save(parcela);
  }

  async findAll(): Promise<Parcela[]> {
    return this.parcelasRepository.find();
  }

  async findOne(id: number): Promise<Parcela> {
    const parcela = await this.parcelasRepository.findOne({ where: { id_parcela: id } });
    if (!parcela) {
      throw new NotFoundException(`Parcela con ID ${id} no encontrada`);
    }
    return parcela;
  }

  async update(id: number, updateParcelaDto: UpdateParcelaDto): Promise<Parcela> {
    const parcela = await this.findOne(id);
    this.parcelasRepository.merge(parcela, updateParcelaDto);
    return this.parcelasRepository.save(parcela);
  }

  async remove(id: number): Promise<void> {
    const parcela = await this.findOne(id);
    
    // Registrar en parcelas_borradas
    await this.parcelasBorradasService.registrarParcela(id);
    
    await this.parcelasRepository.remove(parcela);
  }
}