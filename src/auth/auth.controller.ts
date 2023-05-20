import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

        @HttpCode(HttpStatus.OK)
        @Post()
        async signIn(@Body() signInDto: Record<string, any>) {
          return await this.authService.signIn(signInDto.nom, signInDto.passe);
        }
}

