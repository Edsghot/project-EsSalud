import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CentroSaludService } from './centro-salud.service';
import { CreateCentroSaludDto } from 'src/dto/CreateCentroSaluDto.dto';
import { UpdateCentroSaludDto } from 'src/dto/UpdateCentroSaludDto.dto';

@Controller('api/centro-salud/')
export class CentroSaludController {
    constructor(private readonly centroSaludService: CentroSaludService) {}

    @Post('create')
    async createCentro(@Body() request: CreateCentroSaludDto) {
        return await this.centroSaludService.createCentroSalud(request);
    }

    @Get('getAll')
    async getAllCentros() {
        return await this.centroSaludService.getAllCentros();
    }

    @Get('getById/:id')
    async getCentroById(@Param('id') id: number) {
        return await this.centroSaludService.getCentroById(id);
    }

    @Put('update')
    async updateCentro( @Body() request: UpdateCentroSaludDto) {
        return await this.centroSaludService.updateCentro( request);
    }

    @Delete('delete/:id')
    async deleteCentro(@Param('id') id: number) {
        return await this.centroSaludService.deleteCentro(id);
    }
}
