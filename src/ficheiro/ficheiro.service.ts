import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateFicheiroDto } from './dto/create-ficheiro.dto';
import { UpdateFicheiroDto } from './dto/update-ficheiro.dto';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Injectable()
export class FicheiroService {
  create(createFicheiroDto: CreateFicheiroDto) {
    return 'This action adds a new ficheiro';
  }

  findAll() {
    return `This action returns all ficheiro`;
  }

  getFile(language: string, res: Response): StreamableFile {
    if (!existsSync(`assets/${language}.json`)) {
      console.log(`${language} does not exist, "en" returned instead`);
      language = 'en';
    }
    const file = createReadStream(
      join(process.cwd(), `assets/${language}.json`),
    );
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${language}.json"`,
    });
    return new StreamableFile(file);
  }

  update(id: number, updateFicheiroDto: UpdateFicheiroDto) {
    return `This action updates a #${id} ficheiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} ficheiro`;
  }
}
