import { Module } from '@nestjs/common';
import { DummyItemService } from './dummy-item.service';
import { DummyItemController } from './dummy-item.controller';

@Module({
  controllers: [DummyItemController],
  providers: [DummyItemService],
})
export class DummyItemModule {}
