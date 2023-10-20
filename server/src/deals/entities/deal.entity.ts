import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  amount: string;

  @Column()
  ticket: string;

  @Column()
  yieldItem: string;

  @Column()
  daysLeft: number;

  @Column()
  sold: string;

  @Column()
  picture: string;
}
