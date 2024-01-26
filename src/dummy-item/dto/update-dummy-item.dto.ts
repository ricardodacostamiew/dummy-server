import { PartialType } from '@nestjs/mapped-types';
import { CreateDummyItemDto } from './create-dummy-item.dto';

export class UpdateDummyItemDto extends PartialType(CreateDummyItemDto) {}
