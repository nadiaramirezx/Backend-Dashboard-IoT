import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosSensoresService } from './datos-sensores.service';
import { CreateDatosSensorDto } from './dto/create-datos-sensores.dto';
import { UpdateDatosSensorDto } from './dto/update-datos-sensores.dto';
import { DatosSensor } from './datos-sensores.entity';

@Controller('datos-sensores')
export class DatosSensoresController {
  constructor(private readonly datosSensoresService: DatosSensoresService) {}

  @Post()
  create(@Body() createDatosSensorDto: CreateDatosSensorDto): Promise<DatosSensor> {
    return this.datosSensoresService.create(createDatosSensorDto);
  }

  @Get()
  findAll(): Promise<DatosSensor[]> {
    return this.datosSensoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DatosSensor> {
    return this.datosSensoresService.findOne(+id);
  }

  @Get('parcela/:id')
  findByParcela(@Param('id') id: string): Promise<DatosSensor[]> {
    return this.datosSensoresService.findByParcelaId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosSensorDto: UpdateDatosSensorDto): Promise<DatosSensor> {
    return this.datosSensoresService.update(+id, updateDatosSensorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.datosSensoresService.remove(+id);
  }
}