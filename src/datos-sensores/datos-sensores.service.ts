import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatosSensor } from './datos-sensores.entity';
import { CreateDatosSensorDto } from './dto/create-datos-sensores.dto';
import { UpdateDatosSensorDto } from './dto/update-datos-sensores.dto';

@Injectable()
export class DatosSensoresService {
  constructor(
    @InjectRepository(DatosSensor)
    private datosSensoresRepository: Repository<DatosSensor>,
  ) {}

  async create(createDatosSensorDto: CreateDatosSensorDto): Promise<DatosSensor> {
    const datosSensor = this.datosSensoresRepository.create(createDatosSensorDto);
    return this.datosSensoresRepository.save(datosSensor);
  }

  async findAll(): Promise<DatosSensor[]> {
    return this.datosSensoresRepository.find();
  }

  async findOne(id: number): Promise<DatosSensor> {
    const datosSensor = await this.datosSensoresRepository.findOne({ 
      where: { id_datos_sensores: id } 
    });
    
    if (!datosSensor) {
      throw new NotFoundException(`Datos del sensor con ID ${id} no encontrados`);
    }
    
    return datosSensor;
  }

  async findByParcelaId(parcelaId: number): Promise<DatosSensor[]> {
    return this.datosSensoresRepository.find({
      where: { id_parcela_id: parcelaId },
      order: { fecha_registro: 'DESC', hora_registro: 'DESC' },
    });
  }

  async update(id: number, updateDatosSensorDto: UpdateDatosSensorDto): Promise<DatosSensor> {
    const datosSensor = await this.findOne(id);
    this.datosSensoresRepository.merge(datosSensor, updateDatosSensorDto);
    return this.datosSensoresRepository.save(datosSensor);
  }

  async remove(id: number): Promise<void> {
    const datosSensor = await this.findOne(id);
    await this.datosSensoresRepository.remove(datosSensor);
  }
}