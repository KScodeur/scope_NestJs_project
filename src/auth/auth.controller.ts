import { Body, Controller, HttpCode, HttpStatus, Post, Get, Param, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

        @Public()
        @HttpCode(HttpStatus.OK)
        @Post()
        async signIn(@Body() signInDto: Record<string, any>) {
         return await this.authService.signIn(signInDto.nom,signInDto.passe);
        }
        
        @UseGuards(AuthGuard)
        @Get('profile')
        getProfile(@Request() req) {
          return req.user;
        }

}

