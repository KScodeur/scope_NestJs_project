import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUtilisateurDto } from 'src/utilisateurs/dto/create-utilisateurs.dto';
import{UpdateUtilisateurDto} from 'src/utilisateurs/dto/update-utilisateurs.dto'
import { Utilisateurs } from './utilisateurs.entity/utilisateurs.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateursService {
    constructor(
        @InjectRepository(Utilisateurs)
        private readonly utilisateurRepository: Repository<Utilisateurs>
    ) { }
    create(createUtilisateurDto: CreateUtilisateurDto) : Promise<Utilisateurs>{
        let utilisateur: Utilisateurs = new Utilisateurs();
        utilisateur.nom = createUtilisateurDto.nom
        return this.utilisateurRepository.save(utilisateur);
    }
    
    findAll(): Promise<Utilisateurs[]> {
        return this.utilisateurRepository.find()
    }


    async findOne(id: number){
        try{
            return await this.utilisateurRepository.findOneBy({id:id});
        }catch(error){
            console.error();
            throw new InternalServerErrorException("Failed to find on item")
        };
        
        
    }
    
    async update(id:number, updateUtilisateurDto:UpdateUtilisateurDto){
        try{
        let utilisateur: Utilisateurs = new  Utilisateurs();
        utilisateur.nom = updateUtilisateurDto.nom
        utilisateur.id = id
        return await this.utilisateurRepository.save(utilisateur);
        }catch{
            console.error();
            throw new InternalServerErrorException("Failed to Update")   
        }
    }
    
    async delete(id: number){
        try{
            return this.utilisateurRepository.delete(id);
        }catch{
            console.error();
            throw new InternalServerErrorException("Failed to delete")
        }
        
    }
    
}
