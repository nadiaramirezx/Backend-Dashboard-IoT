import { IsNotEmpty, IsNumber, IsDateString, IsString, Min, Max } from 'class-validator';

export class CreateDatosSensorDto {
  @IsNotEmpty()
  @IsNumber()
  id_parcela_id: number;

  @IsNotEmpty()
  @IsDateString()
  fecha_registro: string;

  @IsNotEmpty()
  @IsString()
  hora_registro: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  humedad: number;

  @IsNotEmpty()
  @IsNumber()
  temperatura: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  lluvia: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  sol: number;
}