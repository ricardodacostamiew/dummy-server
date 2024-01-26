import { Test, TestingModule } from '@nestjs/testing';
import { DummyItemService } from './dummy-item.service';

describe('DummyItemService', () => {
  let service: DummyItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DummyItemService],
    }).compile();

    service = module.get<DummyItemService>(DummyItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
