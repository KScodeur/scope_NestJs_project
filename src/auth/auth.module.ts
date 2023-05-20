import { Module } from '@nestjs/common';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthService } from './auth.service';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';

@Module({
  imports: [UtilisateursModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [AuthController],
  providers: [AuthService,UtilisateursService]
})
export class AuthModule {}
