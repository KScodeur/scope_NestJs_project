import { Module } from '@nestjs/common';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthService } from './auth.service';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UtilisateursController } from 'src/utilisateurs/utilisateurs.controller';
import { Utilisateurs } from 'src/utilisateurs/utilisateurs.entity/utilisateurs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { EventsModule } from 'src/events/events.module';


@Module({
  imports: [TypeOrmModule.forFeature([Utilisateurs]),
    PassportModule,
    EventsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [AuthController,UtilisateursController],
  providers: [AuthService,
    UtilisateursService,
    LocalStrategy,
    {provide: APP_GUARD,
    useClass: AuthGuard},
  ],

    
})
export class AuthModule {}
