import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  StreamableFile,
  Header,
  Res,
} from '@nestjs/common';
import { FicheiroService } from './ficheiro.service';
import { CreateFicheiroDto } from './dto/create-ficheiro.dto';
import { UpdateFicheiroDto } from './dto/update-ficheiro.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller('ficheiro')
export class FicheiroController {
  constructor(private readonly ficheiroService: FicheiroService) {}


  @Get(':language')
  getFile(
    @Param('language') language: string,
    @Res({ passthrough: true }) res: Response,
  ): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), `assets/${language}.json`),
    );
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${language}.json"`,
    });
    return new StreamableFile(file);
  }

  @Post()
  create(@Body() createFicheiroDto: CreateFicheiroDto) {
    return this.ficheiroService.create(createFicheiroDto);
  }

  @Get()
  findAll() {
    return this.ficheiroService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFicheiroDto: UpdateFicheiroDto,
  ) {
    return this.ficheiroService.update(+id, updateFicheiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ficheiroService.remove(+id);
  }
}
