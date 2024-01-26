import { PartialType } from '@nestjs/mapped-types';
import { CreateFicheiroDto } from './create-ficheiro.dto';

export class UpdateFicheiroDto extends PartialType(CreateFicheiroDto) {}
