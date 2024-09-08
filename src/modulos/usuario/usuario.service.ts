import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { insertUsuarioDto } from 'src/dto/insertUsuario.dto';
import { LoginDto } from 'src/dto/login.dto';
import { updateUsuarioDto } from 'src/dto/updateUsuarioDto.dto';
import { CentroSalud } from 'src/entity/centroSalud.entity';
import { Usuario } from 'src/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor( @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,@InjectRepository(CentroSalud)
    private readonly centroRepository: Repository<CentroSalud>){}

    async insertUser(request: insertUsuarioDto) {
        try {
  
          var user = await this.userRepository.findOne({where: {dni: request.dni}});

           if(user){
              return {
                  msg: "ya existe un usuario con este DNI",success: false
              }
           }

           
          var mail = await this.userRepository.findOne({where: {email: request.email}});

          if(user){
             return {
                 msg: "ya existe un usuario con este email",success: false
             }
          }

           var centro = await this.centroRepository.findOne({where:{idCentroSalud: request.idCentroSalud}});

           if(!centro){
            return {
                msg: "No se encuentra este centro de salud",success: false
            }
           }
  
            const newUser = this.userRepository.create({
                nombresCompletos: request.nombresCompletos,
                dni: request.dni,
                direccion: request.direccion,
                email: request.email,
                cumpleanos: request.dni,
                password: request.password,
                rol: request.rol,
                departamento: request.departamento,
                CentroSalud: centro
            });

            await this.userRepository.save(newUser);
    
            return { msg: 'Usuario creado correctamente', success: true };
        } catch (error) {
            console.error('Failed to insert user:', error);
            return { msg: 'Failed to insert user', detailMsg: error, success: false };
        }
    }

    async getAllUsers() {
        try {
            const users = await this.userRepository.find({ relations: ['CentroSalud'] });
            return { data: users, success: true };
        } catch (error) {
            console.error('Failed to fetch users:', error);
            return { msg: 'Failed to fetch users', detailMsg: error, success: false };
        }
    }

    async getUserById(id: number) {
        try {
            const user = await this.userRepository.findOne({ where: {idUsuario: id }, relations: ['CentroSalud'] });
            if (!user) {
                return { msg: 'Usuario no encontrado', success: false };
            }
            return { data: user, success: true };
        } catch (error) {
            console.error('Failed to fetch user:', error);
            return { msg: 'Failed to fetch user', detailMsg: error, success: false };
        }
    }

    async updateUser(request: updateUsuarioDto) {
        try {
            const user = await this.userRepository.findOne({ where: { idUsuario: request.idUsuario} });
    
            if (!user) {
                return { msg: 'Usuario no encontrado', success: false };
            }
    
            if (request.idCentroSalud) {
                var centro = await this.centroRepository.findOne({ where: { idCentroSalud: request.idCentroSalud } });
    
                if (!centro) {
                    return { msg: 'No se encuentra este centro de salud', success: false };
                }
    
                user.CentroSalud = centro;
            }
    
            user.nombresCompletos = request.nombresCompletos || user.nombresCompletos;
            user.direccion = request.direccion || user.direccion;
            user.email = request.email || user.email;
            user.cumpleanos = request.cumpleanos || user.cumpleanos;
            user.password = request.password || user.password;
            user.rol = request.rol || user.rol;
            user.departamento = request.departamento || user.departamento;
    
            await this.userRepository.save(user);
            return { msg: 'Usuario actualizado correctamente', success: true };
        } catch (error) {
            console.error('Failed to update user:', error);
            return { msg: 'Failed to update user', detailMsg: error, success: false };
        }
    }
    
    async deleteUser(id: number) {
        try {
            const user = await this.userRepository.findOne({ where: { idUsuario:id } });
    
            if (!user) {
                return { msg: 'Usuario no encontrado', success: false };
            }
    
            await this.userRepository.remove(user);
            return { msg: 'Usuario eliminado correctamente', success: true };
        } catch (error) {
            console.error('Failed to delete user:', error);
            return { msg: 'Failed to delete user', detailMsg: error, success: false };
        }
    }    
    async Login(request: LoginDto) {
        try {
            const user = await this.userRepository.findOne({where: {email: request.email,password: request.password}});
    
            if (!user) {
                return { msg: 'Verifique su contrasena', success: false };
            }

            return { msg: 'logueado',data: user, success: true };
        } catch (error) {
            console.error('Failed to user:', error);
            return { msg: 'Failed', detailMsg: error, success: false };
        }
    }    
    
    
}
