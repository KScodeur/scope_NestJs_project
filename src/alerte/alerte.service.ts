import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';
import { Alerte } from './entities/alerte.entity';

@Injectable()
export class AlerteService {
  constructor(
    @InjectRepository(Alerte)
    private readonly alerteRepository: Repository<Alerte>
  ){ }

  create(createAlerteDto: CreateAlerteDto) {
    return 'This action adds a new alerte';
  }

  findAll() {
    return `This action returns all alerte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alerte`;
  }

  update(id: number, updateAlerteDto: UpdateAlerteDto) {
    return `This action updates a #${id} alerte`;
  }

  remove(id: number) {
    return `This action removes a #${id} alerte`;
  }
}
