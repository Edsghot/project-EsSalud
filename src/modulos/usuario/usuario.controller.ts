import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { insertUsuarioDto } from 'src/dto/insertUsuario.dto';
import { updateUsuarioDto } from 'src/dto/updateUsuarioDto.dto';
import { UsuarioService } from './usuario.service';
import { LoginDto } from 'src/dto/login.dto';

@Controller('api/usuario/')
export class UsuarioController {
    constructor(private readonly userService: UsuarioService) {}

    @Post('insert')
    async insertUser(@Body() request: insertUsuarioDto) {
        return await this.userService.insertUser(request);
    }

    @Get('getAll')
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }

    @Get('getBydId/:id')
    async getUserById(@Param('id') id: number) {
        return await this.userService.getUserById(id);
    }

    @Put('update')
    async updateUser(@Body() request: updateUsuarioDto) {
        return await this.userService.updateUser( request);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id: number) {
        return await this.userService.deleteUser(id);
    }

    @Post('login')
    async loginUser(@Body() request: LoginDto) {
        return await this.userService.Login(request);
    }
}
