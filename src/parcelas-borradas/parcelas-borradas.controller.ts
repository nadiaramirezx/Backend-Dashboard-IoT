import { Controller, Get } from '@nestjs/common';
import { ParcelasBorradasService } from './parcelas-borradas.service';
import { ParcelaBorrada } from './parcela-borrada.entity';

@Controller('parcelas-borradas')
export class ParcelasBorradasController {
  constructor(private readonly parcelasBorradasService: ParcelasBorradasService) {}

  @Get()
  findAll(): Promise<ParcelaBorrada[]> {
    return this.parcelasBorradasService.findAll();
  }
}