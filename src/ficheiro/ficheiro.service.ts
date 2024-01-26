import { Injectable } from '@nestjs/common';
import { CreateFicheiroDto } from './dto/create-ficheiro.dto';
import { UpdateFicheiroDto } from './dto/update-ficheiro.dto';

@Injectable()
export class FicheiroService {
  create(createFicheiroDto: CreateFicheiroDto) {
    return 'This action adds a new ficheiro';
  }

  findAll() {
    return `This action returns all ficheiro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ficheiro`;
  }

  update(id: number, updateFicheiroDto: UpdateFicheiroDto) {
    return `This action updates a #${id} ficheiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} ficheiro`;
  }
}
