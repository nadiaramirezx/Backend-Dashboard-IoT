import { Parcela } from 'src/parcelas/parcela.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('datos_sensores')
export class DatosSensor {
  @PrimaryGeneratedColumn()
  id_datos_sensores: number;

  @Column()
  id_parcela_id: number;

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

  @ManyToOne(() => Parcela, parcela => parcela.datosSensores)
  @JoinColumn({ name: 'id_parcela_id' })
  parcela: Parcela;
}