import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DummyItemService } from './dummy-item.service';
import { CreateDummyItemDto } from './dto/create-dummy-item.dto';
import { UpdateDummyItemDto } from './dto/update-dummy-item.dto';

@Controller('dummy-item')
export class DummyItemController {
  constructor(private readonly dummyItemService: DummyItemService) {}

  @Post()
  create(@Body() createDummyItemDto: CreateDummyItemDto) {
    return this.dummyItemService.create(createDummyItemDto);
  }

  @Get()
  findAll() {
    return this.dummyItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dummyItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDummyItemDto: UpdateDummyItemDto) {
    return this.dummyItemService.update(+id, updateDummyItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dummyItemService.remove(+id);
  }
}
