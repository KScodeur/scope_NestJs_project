import { Get, Controller, Post, Patch, Param, Body, Delete, ParseIntPipe } from '@nestjs/common';
import path from 'path';
import { CreateUtilisateurDto } from 'src/utilisateurs/dto/create-utilisateurs.dto';
import { UpdateUtilisateurDto } from 'src/utilisateurs/dto/update-utilisateurs.dto';
import { UtilisateursService } from './utilisateurs.service';
import * as bcrypt from 'bcrypt';


@Controller('utilisateurs')
export class UtilisateursController {
    constructor(private readonly userservice: UtilisateursService){}

    @Post()
    async create(@Body() createUtilisateurDto: CreateUtilisateurDto){
      return await this.userservice.create(createUtilisateurDto)
    }

    @Get()
    async findAll(){
        return await this.userservice.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:number){
      return await this.userservice.findOne(+id)
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateUtilisateurDto: UpdateUtilisateurDto){
      return await this.userservice.update(id, updateUtilisateurDto)
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
      return await this.userservice.delete(+id)
    }

}

