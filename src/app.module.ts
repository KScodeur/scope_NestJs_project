import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateurs } from './utilisateurs/utilisateurs.entity/utilisateurs.entity';
import { typeOrmConfig } from './config/typeorm.config';
import { AlerteModule } from './alerte/alerte.module';


@Module({
  imports: [
    AuthModule,
    UtilisateursModule,
    TypeOrmModule.forRoot(typeOrmConfig),
     
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
