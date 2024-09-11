import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enlaceVideo: string;

  @Column({ nullable: true })
  descripcion: string;
}
