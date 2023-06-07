import { IsNotEmpty} from 'class-validator';
export class CreatePayDto {
    @IsNotEmpty()
    nom_pays: string
}
