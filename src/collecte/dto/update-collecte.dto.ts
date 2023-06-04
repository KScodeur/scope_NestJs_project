import { PartialType } from '@nestjs/swagger';
import { CreateCollecteDto } from './create-collecte.dto';

export class UpdateCollecteDto extends PartialType(CreateCollecteDto) {}
