import { Parcela } from 'src/parcelas/parcela.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('parcelas_borradas')
export class ParcelaBorrada {
  @PrimaryGeneratedColumn()
  id_parcela_borrada: number;

  @Column()
  id_parcela_id: number;

  @Column({ type: 'datetime' })
  fecha_eliminado: Date;

  @ManyToOne(() => Parcela, parcela => parcela.parcelasBorradas)
  @JoinColumn({ name: 'id_parcela_id' })
  parcela: Parcela;
}