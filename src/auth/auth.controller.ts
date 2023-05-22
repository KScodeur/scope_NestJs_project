import { Body, Controller, HttpCode, HttpStatus, Post, Get, Param} from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

        // @HttpCode(HttpStatus.OK)
        @Post()
        async signIn(@Body() signInDto: Record<string, any>) {
          return await this.authService.signIn(signInDto.nom,signInDto.passe);
        }
        
        // @Get(':id')
        // async findOne(@Param('id') id:number){
        // return await this.authService.findOne(id)
        // }
}

