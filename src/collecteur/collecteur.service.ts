import { Injectable, InternalServerErrorException, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollecteurDto } from './dto/create-collecteur.dto';
import { UpdateCollecteurDto } from './dto/update-collecteur.dto';
import { Collecteur } from './entities/collecteur.entity';

@Injectable()
export class CollecteurService {
  constructor(
    @InjectRepository(Collecteur)
    private readonly collecteurRepository: Repository<Collecteur>

  ){ }

  async create(createCollecteurDto: CreateCollecteurDto):Promise<Collecteur> {
    try{
      let collecteur = new Collecteur()
      collecteur.nom_collecteur = createCollecteurDto.nom_collecteur
      return await this.collecteurRepository.save(collecteur)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async findAll():Promise<Collecteur[]>{
    return await this.collecteurRepository.find();
  }

  async findOne(id:number) {
    try{
      return await this.collecteurRepository.findOneBy({collecteur_id:id})
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async update(id: number, updateCollecteurDto: UpdateCollecteurDto) {
    try{
      let collecteur = new Collecteur()
      collecteur.nom_collecteur = updateCollecteurDto.nom_collecteur
      collecteur.collecteur_id = id
      return await this.collecteurRepository.save(collecteur)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  remove(id: number) {
    try{
      return this.collecteurRepository.delete(id);
    }catch{
        console.error();
        throw new InternalServerErrorException("Failed to delete")
    }
  
  }
}
