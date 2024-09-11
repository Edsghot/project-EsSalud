import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Turnos } from 'src/entity/turnos.entity';
import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {

    constructor(private readonly turnosService: TurnosService) {}

    @Post()
    create(@Body() turno: Turnos): Promise<Turnos> {
        return this.turnosService.create(turno);
    }

    @Get()
    findAll(): Promise<Turnos[]> {
        return this.turnosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Turnos> {
        return this.turnosService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.turnosService.remove(id);
    }
}
