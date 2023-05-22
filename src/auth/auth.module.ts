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

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateurs]),
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [AuthController,UtilisateursController],
  providers: [AuthService,UtilisateursService,LocalStrategy]
})
export class AuthModule {}
