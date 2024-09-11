// turnos.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Turnos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Turno: string;
    @Column()
    Dia: string;

    @Column()
    IdUser: number;
}
