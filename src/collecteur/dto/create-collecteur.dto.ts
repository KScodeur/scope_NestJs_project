import { IsNotEmpty} from 'class-validator';
export class CreateCollecteurDto {
    @IsNotEmpty()
    nom_collecteur: string
}
