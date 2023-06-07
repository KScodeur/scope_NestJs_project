import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
  async create(createQuartierDto: CreateQuartierDto):Promise<Quartier> {
    try{
      let quartier = new Quartier()
      quartier.nom_quartier = createQuartierDto.nom_quartier
      return await this.quartierRepository.save(quartier)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async findAll():Promise<Quartier[]>{
    return await this.quartierRepository.find();
  }

  async findOne(id:number) {
    try{
      return await this.quartierRepository.findOneBy({quartier_id:id})
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async update(id: number, updateQuartierDto: UpdateQuartierDto) {
    try{
      let quartier = new Quartier()
      quartier.nom_quartier = updateQuartierDto.nom_quartier
      quartier.quartier_id = id
      return await this.quartierRepository.save(quartier)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  remove(id: number) {
    try{
      return this.quartierRepository.delete(id);
    }catch{
        console.error();
        throw new InternalServerErrorException("Failed to delete")
    }
  
  }
}
