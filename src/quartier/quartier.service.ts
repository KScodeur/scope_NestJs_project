import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuartierDto } from './dto/create-quartier.dto';
import { UpdateQuartierDto } from './dto/update-quartier.dto';
import { Quartier } from './entities/quartier.entity';

@Injectable()
export class QuartierService {
  constructor(
    @InjectRepository(Quartier)
    private readonly quartierRepository: Repository<Quartier>
  ){ }
  create(createQuartierDto: CreateQuartierDto) {
    return 'This action adds a new quartier';
  }

  findAll() {
    return `This action returns all quartier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quartier`;
  }

  update(id: number, updateQuartierDto: UpdateQuartierDto) {
    return `This action updates a #${id} quartier`;
  }

  remove(id: number) {
    return `This action removes a #${id} quartier`;
  }
}
