import { BadRequestException, Body, Injectable, ParseIntPipe, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private utilisateursService : UtilisateursService,
        private jwtService: JwtService){}

    async signIn(nom:string, passe:string){
        console.log(passe);
        
        const user = await this.utilisateursService.findOneBy(nom);
        let verify= await bcrypt.compare(passe, user.passe)
        if (!verify){
            // const { passe, ...result} = user;
            throw new UnauthorizedException('Vérifier le nom et le mot de passe')
        }
        const payload = { nom: user.nom, sub: user.id };
        
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}

    

