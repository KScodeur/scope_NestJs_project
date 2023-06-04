import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerte } from 'src/alerte/entities/alerte.entity';
import { EventsModule } from 'src/events/events.module';
import { UtilisateursController } from './utilisateurs.controller';
import { Utilisateurs } from './utilisateurs.entity/utilisateurs.entity';
import { UtilisateursService } from './utilisateurs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateurs, Alerte]),
  EventsModule,
],
  controllers: [UtilisateursController],
  providers: [UtilisateursService],
})
export class UtilisateursModule {}
