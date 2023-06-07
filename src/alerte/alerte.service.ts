import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async create(createAlerteDto: CreateAlerteDto, utilisateur_id:any) {
    try{
      let alerte = new Alerte()
      alerte.statut_alerte = createAlerteDto.statut_alerte
      return await this.alerteRepository.save(alerte, utilisateur_id)
    }catch(e){
      throw new InternalServerErrorException()
    }
   
  }

  async findAll():Promise<Alerte[]>{
    return await this.alerteRepository.find();
  }

  async findOne(id:number) {
    try{
      return await this.alerteRepository.findOneBy({alerte_id:id})
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async update(id: number, updateAlerteDto: UpdateAlerteDto) {
    try{
      let alerte = new Alerte()
      alerte.statut_alerte = updateAlerteDto.statut_alerte
      return await this.alerteRepository.save(alerte)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  remove(id: number) {
    try{
      return this.alerteRepository.delete(id);
    }catch{
        console.error();
        throw new InternalServerErrorException("Failed to delete")
    }
  }
}
