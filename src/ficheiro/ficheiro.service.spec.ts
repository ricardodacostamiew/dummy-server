import { Test, TestingModule } from '@nestjs/testing';
import { FicheiroService } from './ficheiro.service';

describe('FicheiroService', () => {
  let service: FicheiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FicheiroService],
    }).compile();

    service = module.get<FicheiroService>(FicheiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
