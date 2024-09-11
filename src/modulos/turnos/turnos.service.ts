import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Turnos } from 'src/entity/turnos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurnosService {

    constructor(
        @InjectRepository(Turnos)
        private turnosRepository: Repository<Turnos>,
    ) {}

    async create(turno: Turnos): Promise<Turnos> {
        return this.turnosRepository.save(turno);
    }

    async findAll(): Promise<Turnos[]> {
        return this.turnosRepository.find();
    }

    async findOne(id: number): Promise<Turnos> {
        return this.turnosRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.turnosRepository.delete(id);
    }
}
