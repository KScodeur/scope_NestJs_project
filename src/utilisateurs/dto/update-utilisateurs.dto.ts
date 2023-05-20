import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateurs.dto';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto){
    nom : string
}