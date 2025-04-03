import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateParcelaDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(110)
  ubicacion: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  responsable: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  tipo_cultivo: string;
}