import { Injectable } from '@nestjs/common';
import { CreateDummyItemDto } from './dto/create-dummy-item.dto';
import { UpdateDummyItemDto } from './dto/update-dummy-item.dto';

@Injectable()
export class DummyItemService {
  create(createDummyItemDto: CreateDummyItemDto) {
    return 'This action adds a new dummyItem';
  }

  findAll() {
    return `This action returns all dummyItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dummyItem`;
  }

  update(id: number, updateDummyItemDto: UpdateDummyItemDto) {
    return `This action updates a #${id} dummyItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} dummyItem`;
  }
}
