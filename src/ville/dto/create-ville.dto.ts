import { IsNotEmpty} from 'class-validator';
export class CreateVilleDto {
    @IsNotEmpty()
    nom_ville: string
}
