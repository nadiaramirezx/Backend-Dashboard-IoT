import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SensoresService } from './sensores.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { Sensor } from './sensor.entity';
import { UpdateSensorDto } from './dto/update-sensor.dto';

@Controller('sensores')
export class SensoresController {
  constructor(private readonly sensoresService: SensoresService) {}

  @Post()
  create(@Body() createSensorDto: CreateSensorDto): Promise<Sensor> {
    return this.sensoresService.create(createSensorDto);
  }

  @Get()
  findAll(): Promise<Sensor[]> {
    return this.sensoresService.findAll();
  }

  @Get('porcentaje-humedad')
  getPorcentajeHumedad() {
    return this.sensoresService.getPorcentajeHumedad();
  }

  @Get('por-hora')
  getDatosPorHora() {
    return this.sensoresService.getDatosPorHora();
  }

  @Get('por-dia')
  getDatosPorDia() {
    return this.sensoresService.getDatosPorDia();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sensor> {
    return this.sensoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSensorDto: UpdateSensorDto): Promise<Sensor> {
    return this.sensoresService.update(+id, updateSensorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sensoresService.remove(+id);
  }
}