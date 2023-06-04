import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';
import { Pay } from './entities/pay.entity';

@Injectable()
export class PaysService {
  constructor(
    @InjectRepository(Pay)
    private readonly paysRepository: Repository<Pay>
  ){ }
  create(createPayDto: CreatePayDto) {
    return 'This action adds a new pay';
  }

  findAll() {
    return `This action returns all pays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pay`;
  }

  update(id: number, updatePayDto: UpdatePayDto) {
    return `This action updates a #${id} pay`;
  }

  remove(id: number) {
    return `This action removes a #${id} pay`;
  }
}
