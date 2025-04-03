import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcelasService } from './parcelas.service';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { Parcela } from './parcela.entity';

@Controller('parcelas')
export class ParcelasController {
  constructor(private readonly parcelasService: ParcelasService) {}

  @Post()
  create(@Body() createParcelaDto: CreateParcelaDto): Promise<Parcela> {
    return this.parcelasService.create(createParcelaDto);
  }

  @Get()
  findAll(): Promise<Parcela[]> {
    return this.parcelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Parcela> {
    return this.parcelasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcelaDto: UpdateParcelaDto): Promise<Parcela> {
    return this.parcelasService.update(+id, updateParcelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.parcelasService.remove(+id);
  }
}