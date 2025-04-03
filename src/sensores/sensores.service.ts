import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Injectable()
export class SensoresService {
  constructor(
    @InjectRepository(Sensor)
    private sensoresRepository: Repository<Sensor>,
  ) {}

  async create(createSensorDto: CreateSensorDto): Promise<Sensor> {
    const sensor = this.sensoresRepository.create(createSensorDto);
    return this.sensoresRepository.save(sensor);
  }

  async findAll(): Promise<Sensor[]> {
    return this.sensoresRepository.find({
      order: { fecha_registro: 'DESC', hora_registro: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Sensor> {
    const sensor = await this.sensoresRepository.findOne({ 
      where: { id_sensores: id } 
    });
    
    if (!sensor) {
      throw new NotFoundException(`Sensor con ID ${id} no encontrado`);
    }
    
    return sensor;
  }

  async findByDate(date: Date): Promise<Sensor[]> {
    return this.sensoresRepository.find({
      where: { fecha_registro: date },
      order: { hora_registro: 'ASC' },
    });
  }

  async getPorcentajeHumedad(): Promise<{ porcentaje_humedad: number }> {
    // Obtener el promedio de humedad de los últimos registros
    const result = await this.sensoresRepository.find({
      order: { fecha_registro: 'DESC', hora_registro: 'DESC' },
      take: 10,
    });
    
    if (result.length === 0) {
      return { porcentaje_humedad: 0 };
    }
    
    const promedio = result.reduce((acc, curr) => acc + Number(curr.humedad), 0) / result.length;
    return { porcentaje_humedad: promedio };
  }

  async getDatosPorHora(): Promise<Sensor[]> {
    return this.sensoresRepository.find({
      order: { fecha_registro: 'DESC', hora_registro: 'DESC' },
      take: 24, // Datos de las últimas 24 horas
    });
  }

  async getDatosPorDia(): Promise<any[]> {
    // Consulta para obtener datos agrupados por día
    const result = await this.sensoresRepository.query(`
      SELECT 
        fecha_registro as fecha,
        AVG(humedad) as humedad,
        AVG(temperatura) as temperatura,
        AVG(lluvia) as lluvia,
        AVG(sol) as sol
      FROM sensores
      GROUP BY fecha_registro
      ORDER BY fecha_registro DESC
      LIMIT 7
    `);
    
    return result;
  }

  async update(id: number, updateSensorDto: UpdateSensorDto): Promise<Sensor> {
    const sensor = await this.findOne(id);
    this.sensoresRepository.merge(sensor, updateSensorDto);
    return this.sensoresRepository.save(sensor);
  }

  async remove(id: number): Promise<void> {
    const sensor = await this.findOne(id);
    await this.sensoresRepository.remove(sensor);
  }
}