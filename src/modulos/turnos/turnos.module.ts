import { Module } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turnos } from 'src/entity/turnos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turnos])],
    controllers: [TurnosController],
    providers: [TurnosService],
})
export class TurnosModule {}
