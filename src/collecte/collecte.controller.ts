import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollecteService } from './collecte.service';
import { CreateCollecteDto } from './dto/create-collecte.dto';
import { UpdateCollecteDto } from './dto/update-collecte.dto';

@Controller('collecte')
export class CollecteController {
  constructor(private readonly collecteService: CollecteService) {}

  @Post()
  create(@Body() createCollecteDto: CreateCollecteDto) {
    return this.collecteService.create(createCollecteDto);
  }

  @Get()
  findAll() {
    return this.collecteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collecteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollecteDto: UpdateCollecteDto) {
    return this.collecteService.update(+id, updateCollecteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collecteService.remove(+id);
  }
}
