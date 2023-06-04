import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUtilisateurDto } from 'src/utilisateurs/dto/create-utilisateurs.dto';
import{UpdateUtilisateurDto} from 'src/utilisateurs/dto/update-utilisateurs.dto'
import { Utilisateurs } from './utilisateurs.entity/utilisateurs.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateursService {
    constructor(
        @InjectRepository(Utilisateurs)
        private readonly utilisateurRepository: Repository<Utilisateurs>
    ) { }
    async create(createUtilisateurDto: CreateUtilisateurDto) : Promise<Utilisateurs>{
        try{
        let utilisateur: Utilisateurs = new Utilisateurs();
        let hash = await bcrypt.hash(createUtilisateurDto.passe, 12)
        utilisateur.nom = createUtilisateurDto.nom
        utilisateur.passe = hash
        return await this.utilisateurRepository.save(utilisateur);
        }catch(error){
            console.error();
            throw new InternalServerErrorException("Failed to create")   
        }
    }
    
    async findAll(): Promise<Utilisateurs[]> {
        return await this.utilisateurRepository.find()
    }


    async findOne(id: number){
        try{
            return await this.utilisateurRepository.findOneBy({utilisateur_id:id});
        }catch(error){
            console.error();
            throw new InternalServerErrorException("Failed to find on item")
        };   
    }
    async findOneBy(nom:string){
        try{
            return await this.utilisateurRepository.findOneBy({nom:nom});
        }catch(error){
            console.error();
            throw new InternalServerErrorException("Failed to find on item")
        };
    }
        
    async update(id:number, updateUtilisateurDto:UpdateUtilisateurDto){
        try{
        let utilisateur: Utilisateurs = new  Utilisateurs();
        let hash = await bcrypt.hash(updateUtilisateurDto.passe, 12)
        utilisateur.nom = updateUtilisateurDto.nom
        utilisateur.passe = hash
        utilisateur.utilisateur_id = id
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
