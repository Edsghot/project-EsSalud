import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Administrador } from "./administrador.entity";

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
    email: string;

    @Column()
    departamento: string;

    @OneToMany(() => Usuario, usuario => usuario.CentroSalud)
    usuario: Usuario[]; 

    @OneToMany(() => Administrador, admin => admin.CentroSalud)
    administrador: Administrador[]; 
}