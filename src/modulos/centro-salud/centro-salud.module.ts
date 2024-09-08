import { Module } from '@nestjs/common';
import { CentroSaludController } from './centro-salud.controller';
import { CentroSaludService } from './centro-salud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroSalud } from 'src/entity/centroSalud.entity';
import { Usuario } from 'src/entity/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),TypeOrmModule.forFeature([CentroSalud])
  ],
  providers: [CentroSaludService],
  controllers: [CentroSaludController]
})
export class CentroSaludModule {}
