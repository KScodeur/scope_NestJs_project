import { Module } from '@nestjs/common';
import { AlerteService } from './alerte.service';
import { AlerteController } from './alerte.controller';
import { Alerte } from './entities/alerte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateurs } from 'src/utilisateurs/utilisateurs.entity/utilisateurs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alerte, Utilisateurs])],
  controllers: [AlerteController],
  providers: [AlerteService]
})
export class AlerteModule {}
