import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { Ville } from './entities/ville.entity';

@Injectable()
export class VilleService {
  constructor(
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>
  ){ }
  create(createVilleDto: CreateVilleDto) {
    return 'This action adds a new ville';
  }

  findAll() {
    return `This action returns all ville`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ville`;
  }

  update(id: number, updateVilleDto: UpdateVilleDto) {
    return `This action updates a #${id} ville`;
  }

  remove(id: number) {
    return `This action removes a #${id} ville`;
  }
}
