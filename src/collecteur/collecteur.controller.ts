import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { Public } from 'src/auth/decorator';
import { CollecteurService } from './collecteur.service';
import { CreateCollecteurDto } from './dto/create-collecteur.dto';
import { UpdateCollecteurDto } from './dto/update-collecteur.dto';

@Controller('collecteur')
export class CollecteurController {
  constructor(private readonly collecteurService: CollecteurService) {}

  @Post()
  create(@Body() createCollecteurDto: CreateCollecteurDto) {
    return this.collecteurService.create(createCollecteurDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.collecteurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collecteurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCollecteurDto: UpdateCollecteurDto) {
    return this.collecteurService.update(+id, updateCollecteurDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collecteurService.remove(+id);
  }
}
