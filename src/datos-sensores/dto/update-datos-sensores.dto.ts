import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosSensorDto } from './create-datos-sensores.dto';

export class UpdateDatosSensorDto extends PartialType(CreateDatosSensorDto) {}