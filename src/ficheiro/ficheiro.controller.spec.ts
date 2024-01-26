import { Test, TestingModule } from '@nestjs/testing';
import { FicheiroController } from './ficheiro.controller';
import { FicheiroService } from './ficheiro.service';

describe('FicheiroController', () => {
  let controller: FicheiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FicheiroController],
      providers: [FicheiroService],
    }).compile();

    controller = module.get<FicheiroController>(FicheiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
