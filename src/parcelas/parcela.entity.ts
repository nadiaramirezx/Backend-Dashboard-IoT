import { DatosSensor } from 'src/datos-sensores/datos-sensores.entity';
import { ParcelaBorrada } from 'src/parcelas-borradas/parcela-borrada.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('parcelas')
export class Parcela {
  @PrimaryGeneratedColumn()
  id_parcela: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 110 })
  ubicacion: string;

  @Column({ length: 50 })
  responsable: string;

  @Column({ length: 50 })
  tipo_cultivo: string;

  @OneToMany(() => DatosSensor, datosSensor => datosSensor.parcela)
  datosSensores: DatosSensor[];

  @OneToMany(() => ParcelaBorrada, parcelaBorrada => parcelaBorrada.parcela)
  parcelasBorradas: ParcelaBorrada[];
}