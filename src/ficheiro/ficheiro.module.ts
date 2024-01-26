import { Module } from '@nestjs/common';
import { FicheiroService } from './ficheiro.service';
import { FicheiroController } from './ficheiro.controller';

@Module({
  controllers: [FicheiroController],
  providers: [FicheiroService],
})
export class FicheiroModule {}
