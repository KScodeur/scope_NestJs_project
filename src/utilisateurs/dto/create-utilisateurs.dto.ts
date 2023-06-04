import { IsNotEmpty} from 'class-validator';
export class CreateUtilisateurDto{
     @IsNotEmpty()
     nom : string;
     
     @IsNotEmpty()
     passe: string
}