import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCentroSaludDto } from 'src/dto/CreateCentroSaluDto.dto';
import { UpdateCentroSaludDto } from 'src/dto/UpdateCentroSaludDto.dto';
import { CentroSalud } from 'src/entity/centroSalud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CentroSaludService {
    constructor(
        @InjectRepository(CentroSalud)
        private centroSaludRepository: Repository<CentroSalud>,
    ) {}
    
    async createCentroSalud(request: CreateCentroSaludDto) {
        try {
            const newCentro = this.centroSaludRepository.create(request);
            await this.centroSaludRepository.save(newCentro);
            return { msg: 'Centro de salud creado correctamente', success: true };
        } catch (error) {
            console.error('Error al crear el centro de salud:', error);
            return { msg: 'Error al crear el centro de salud', detailMsg: error, success: false };
        }
    }

    async getAllCentros() {
        try {
            const centros = await this.centroSaludRepository.find();
            return { data: centros, success: true };
        } catch (error) {
            console.error('Error al obtener los centros de salud:', error);
            return { msg: 'Error al obtener los centros de salud', detailMsg: error, success: false };
        }
    }

    async getCentroById(id: number) {
        try {
            const centro = await this.centroSaludRepository.findOne({ where: { idCentroSalud: id } });
            if (!centro) {
                return { msg: 'Centro de salud no encontrado', success: false };
            }
            return { data: centro, success: true };
        } catch (error) {
            console.error('Error al obtener el centro de salud:', error);
            return { msg: 'Error al obtener el centro de salud', detailMsg: error, success: false };
        }
    }

    async updateCentro( request: UpdateCentroSaludDto) {
        try {
            const centro = await this.centroSaludRepository.findOne({ where: { idCentroSalud: request.idCentroSalud } });
            if (!centro) {
                return { msg: 'Centro de salud no encontrado', success: false };
            }

            Object.assign(centro, request);  // Actualiza los campos que vengan en el request
            await this.centroSaludRepository.save(centro);
            return { msg: 'Centro de salud actualizado correctamente', success: true };
        } catch (error) {
            console.error('Error al actualizar el centro de salud:', error);
            return { msg: 'Error al actualizar el centro de salud', detailMsg: error, success: false };
        }
    }

    async deleteCentro(id: number) {
        try {
            const centro = await this.centroSaludRepository.findOne({ where: { idCentroSalud: id } });
            if (!centro) {
                return { msg: 'Centro de salud no encontrado', success: false };
            }

            await this.centroSaludRepository.remove(centro);
            return { msg: 'Centro de salud eliminado correctamente', success: true };
        } catch (error) {
            console.error('Error al eliminar el centro de salud:', error);
            return { msg: 'Error al eliminar el centro de salud', detailMsg: error, success: false };
        }
    }
}
