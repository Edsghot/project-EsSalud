import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CentroSalud } from './centroSalud.entity';

@Entity('tUsuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column()
    nombresCompletos: string;

    @Column()
    dni: string;

    @Column()
    direccion: string;
    
    @Column()
    email: string;

    @Column()
    cumpleanos: Date;

    @Column()
    password: string;

    @Column()
    rol: number;

    @Column()
    departamento: string;

    @ManyToOne(() => CentroSalud)
    @JoinColumn({ name: "idCentroSalud" })
    CentroSalud: CentroSalud;
}