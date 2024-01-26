import { Test, TestingModule } from '@nestjs/testing';
import { DummyItemController } from './dummy-item.controller';
import { DummyItemService } from './dummy-item.service';

describe('DummyItemController', () => {
  let controller: DummyItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DummyItemController],
      providers: [DummyItemService],
    }).compile();

    controller = module.get<DummyItemController>(DummyItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
