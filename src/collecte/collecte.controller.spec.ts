import { Test, TestingModule } from '@nestjs/testing';
import { CollecteController } from './collecte.controller';
import { CollecteService } from './collecte.service';

describe('CollecteController', () => {
  let controller: CollecteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollecteController],
      providers: [CollecteService],
    }).compile();

    controller = module.get<CollecteController>(CollecteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
