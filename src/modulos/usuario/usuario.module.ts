import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entity/usuario.entity';
import { CentroSalud } from 'src/entity/centroSalud.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),TypeOrmModule.forFeature([CentroSalud])
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
