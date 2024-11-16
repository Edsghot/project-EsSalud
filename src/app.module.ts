import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { CentroSaludModule } from './modulos/centro-salud/centro-salud.module';
import { CentroSaludController } from './modulos/centro-salud/centro-salud.controller';
import { CentroSaludService } from './modulos/centro-salud/centro-salud.service';
import { AdministradorModule } from './modulos/administrador/administrador.module';
import { TurnosModule } from './modulos/turnos/turnos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '', 
      database: 'db_pagWeb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsuarioModule,
    CentroSaludModule,
    AdministradorModule,
    TurnosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
