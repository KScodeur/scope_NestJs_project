import { IsNotEmpty} from 'class-validator';
export class CreateAlerteDto {
    @IsNotEmpty()
    statut_alerte:string
}
