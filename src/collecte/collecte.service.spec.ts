import { Test, TestingModule } from '@nestjs/testing';
import { CollecteService } from './collecte.service';

describe('CollecteService', () => {
  let service: CollecteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollecteService],
    }).compile();

    service = module.get<CollecteService>(CollecteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
