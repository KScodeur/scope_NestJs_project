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
        const user = await this.utilisateursService.findOneBy(nom);
        console.log(user)
        let verify= await bcrypt.compare(passe, user.passe)
        if (user.nom === nom && verify){
            // const { passe, ...result} = user;
        return user;
        }
            else{
            return 'null';
            }
    }
}
    

