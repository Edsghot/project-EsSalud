// turnos.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Turnos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    StartDate: Date;

    @Column()
    EndDate: Date;

    @Column()
    Dia: Date;

    @Column()
    IdUser: number;
}
