import { Injectable } from '@nestjs/common';
import { CreateCollecteDto } from './dto/create-collecte.dto';
import { UpdateCollecteDto } from './dto/update-collecte.dto';

@Injectable()
export class CollecteService {
  
  create(createCollecteDto: CreateCollecteDto) {
    return 'This action adds a new collecte';
  }

  findAll() {
    return `This action returns all collecte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collecte`;
  }

  update(id: number, updateCollecteDto: UpdateCollecteDto) {
    return `This action updates a #${id} collecte`;
  }

  remove(id: number) {
    return `This action removes a #${id} collecte`;
  }
}
