import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FicheiroModule } from './ficheiro/ficheiro.module';
import { DummyItemModule } from './dummy-item/dummy-item.module';

@Module({
  imports: [FicheiroModule, DummyItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
