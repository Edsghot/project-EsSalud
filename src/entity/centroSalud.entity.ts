import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('tCentroSalud')
export class CentroSalud{
    @PrimaryGeneratedColumn()
    idCentroSalud: number;

    @Column()
    nombreSalud: string;

    @Column()
    telefono: string;

    @Column()
    direccion: string;
    
    @Column()
    codigo: string;

    @Column()
    Email: string;

    @Column()
    Departamento: string;

    @OneToMany(() => Usuario, usuario => usuario.CentroSalud)
    CentroSalud: CentroSalud[]; 
}