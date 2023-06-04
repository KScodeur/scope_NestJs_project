import { PartialType } from '@nestjs/swagger';
import { CreateCollecteurDto } from './create-collecteur.dto';

export class UpdateCollecteurDto extends PartialType(CreateCollecteurDto) {}
