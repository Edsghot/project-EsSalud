import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from 'src/entity/administrador.entity';
import { CentroSalud } from 'src/entity/centroSalud.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Administrador]),TypeOrmModule.forFeature([CentroSalud])],
  providers: [AdministradorService],
  controllers: [AdministradorController]
})
export class AdministradorModule {}
