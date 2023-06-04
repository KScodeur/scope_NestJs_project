import { Module } from '@nestjs/common';
import { QuartierService } from './quartier.service';
import { QuartierController } from './quartier.controller';
import { Quartier } from './entities/quartier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Quartier])],
  controllers: [QuartierController],
  providers: [QuartierService]
})
export class QuartierModule {}
