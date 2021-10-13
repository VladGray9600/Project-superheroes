import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from './file/file.service';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { Heroes, HeroesSchema } from './schemas/heroes.schemas';

@Module({
  providers: [HeroesService, FileService],
  imports:[MongooseModule.forFeature([{name: Heroes.name, schema: HeroesSchema}])],
  controllers:[HeroesController]
})
export class HeroesModule {}
