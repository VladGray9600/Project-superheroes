import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath: path.resolve(__dirname,'.','static')}),HeroesModule,MongooseModule.forRoot('mongodb+srv://vladgray:spider12345@cluster0.p7jjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
