import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateursController } from './utilisateurs.controller';
import { Utilisateurs } from './utilisateurs.entity/utilisateurs.entity';
import { UtilisateursService } from './utilisateurs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateurs])],
  controllers: [UtilisateursController],
  providers: [UtilisateursService],
})
export class UtilisateursModule {}
