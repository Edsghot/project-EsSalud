import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { insertUsuarioDto } from 'src/dto/insertUsuario.dto';
import { updateUsuarioDto } from 'src/dto/updateUsuarioDto.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('api/administrador/')
export class AdministradorController {
    constructor(private readonly administradorService: AdministradorService) {}

    @Post('insert')
    async insertUser(@Body() request: insertUsuarioDto) {
        return await this.administradorService.insertUser(request);
    }

    @Get('getAll')
    async getAllUsers() {
        return await this.administradorService.getAllUsers();
    }

    @Get('getBydId/:id')
    async getUserById(@Param('id') id: number) {
        return await this.administradorService.getUserById(id);
    }

    @Put('update/:id')
    async updateUser(@Body() request: updateUsuarioDto) {
        return await this.administradorService.updateUser( request);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: number) {
        return await this.administradorService.deleteUser(id);
    }

    @Post('login')
    async loginUser(@Body() request: LoginDto) {
        return await this.administradorService.Login(request);
    }

}
