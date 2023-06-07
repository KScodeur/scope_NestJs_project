import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PaysService } from './pays.service';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';

@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Post()
  create(@Body() createPayDto: CreatePayDto) {
    return this.paysService.create(createPayDto);
  }

  @Get()
  findAll() {
    return this.paysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePayDto: UpdatePayDto) {
    return this.paysService.update(+id, updatePayDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.paysService.remove(+id);
  }
}
