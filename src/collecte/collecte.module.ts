import { Module } from '@nestjs/common';
import { CollecteService } from './collecte.service';
import { CollecteController } from './collecte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collecte } from './entities/collecte.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Collecte])],
  controllers: [CollecteController],
  providers: [CollecteService]
})
export class CollecteModule {}
