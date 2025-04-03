import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sensores')
export class Sensor {
  @PrimaryGeneratedColumn()
  id_sensores: number;

  @Column({ type: 'date' })
  fecha_registro: Date;

  @Column({ type: 'time' })
  hora_registro: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  humedad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  temperatura: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  lluvia: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  sol: number;
}