import { IsNotEmpty} from 'class-validator';
export class CreateQuartierDto {
    @IsNotEmpty()
    nom_quartier: string

}
