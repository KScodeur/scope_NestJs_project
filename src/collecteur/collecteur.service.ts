import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} collecteur`;
  }

  update(id: number, updateCollecteurDto: UpdateCollecteurDto) {
    return `This action updates a #${id} collecteur`;
  }

  remove(id: number) {
    return `This action removes a #${id} collecteur`;
  }
}
