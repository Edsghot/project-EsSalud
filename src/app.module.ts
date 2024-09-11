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
    TypeOrmModule.forRoot({
      type: 'mysql',             
      host: 'jhedgost.com',        
      port: 3306,                
      username: 'dbjhfjuv_edsghot',    
      password: 'Repro321.', 
      database: 'dbjhfjuv_bambas',    
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,         
    }),
    UsuarioModule,
    CentroSaludModule,
    AdministradorModule,
    TurnosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
