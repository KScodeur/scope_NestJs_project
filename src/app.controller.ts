import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/decorator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly authService: AuthService
  ) { }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @UseGuards(AuthGuard('local'))
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req);
    
    return await this.authService.signIn(req.body.nom, req.body.passe);
  }
}
