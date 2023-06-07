import { Injectable, InternalServerErrorException} from '@nestjs/common';
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
  async create(createpayDto: CreatePayDto):Promise<Pay> {
    try{
      let pays = new Pay()
      pays.nom_pays = createpayDto.nom_pays
      return await this.paysRepository.save(pays)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async findAll():Promise<Pay[]>{
    return await this.paysRepository.find();
  }

  async findOne(id:number) {
    try{
      return await this.paysRepository.findOneBy({pays_id:id})
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async update(id: number, updatePayDto: UpdatePayDto) {
    try{
      let pays = new Pay()
      pays.nom_pays = updatePayDto.nom_pays
      pays.pays_id = id
      return await this.paysRepository.save(pays)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  remove(id: number) {
    try{
      return this.paysRepository.delete(id);
    }catch{
        console.error();
        throw new InternalServerErrorException("Failed to delete")
    }
  
  }
}
