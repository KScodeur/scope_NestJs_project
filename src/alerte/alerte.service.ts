import { Injectable } from '@nestjs/common';
import { CreateAlerteDto } from './dto/create-alerte.dto';
import { UpdateAlerteDto } from './dto/update-alerte.dto';

@Injectable()
export class AlerteService {
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
