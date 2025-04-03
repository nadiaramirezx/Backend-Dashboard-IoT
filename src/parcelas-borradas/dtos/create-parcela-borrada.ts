import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateParcelaBorradaDto {
  @IsNotEmpty()
  @IsNumber()
  id_parcela_id: number;

  @IsNotEmpty()
  @IsDateString()
  fecha_eliminado: string;
}