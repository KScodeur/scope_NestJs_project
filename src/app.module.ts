import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateurs } from './utilisateurs/utilisateurs.entity/utilisateurs.entity';
import { typeOrmConfig } from './config/typeorm.config';
import { AlerteModule } from './alerte/alerte.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UtilisateursService } from './utilisateurs/utilisateurs.service';
import { EventsModule } from './events/events.module';
// import { MessagesModule } from './messages/messages.module';
import { VilleModule } from './ville/ville.module';
import { CollecteurModule } from './collecteur/collecteur.module';
import { PaysModule } from './pays/pays.module';
import { QuartierModule } from './quartier/quartier.module';
import { CollecteModule } from './collecte/collecte.module';


@Module({
  imports: [
    EventsModule,
    AuthModule,
    TypeOrmModule.forFeature([Utilisateurs]),
    UtilisateursModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    // MessagesModule,
    VilleModule,
    CollecteurModule,
    PaysModule,
    QuartierModule,
    CollecteModule,
     
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService,UtilisateursService],

})
export class AppModule { }
