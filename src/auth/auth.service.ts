import { BadRequestException, Body, Injectable, ParseIntPipe, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private utilisateursService : UtilisateursService,
        private jwtService: JwtService){}

    async findOne(nom:string){
        return await this.utilisateursService.findOne(nom)
    }

    async signIn(nom:string, passe:string): Promise<any> {
        const user = await this.utilisateursService.findOne(nom);

        if (user?.passe !== passe) {
            throw new BadRequestException("mot de passe où nom utilisateur incorrect");
          }

        /*if (user?.passe !== passe) {
          throw new BadRequestException();
        }
        if(await bcrypt.compare(passe, user.passe)){
          throw new BadRequestException();

        }*/
        const payload = { nom: user.nom, sub: user.id };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    
}
}
    

