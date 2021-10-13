import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { CreateHeroDto } from './dto/create-heroes.dto';
import { UpdateHeroDto } from './dto/update-heroes.dto';
import { Model } from 'mongoose';
import { Heroes, HeroesDocument } from './schemas/heroes.schemas';
import { FileService, FileType } from './file/file.service';


@Injectable()
export class HeroesService {
    constructor(@InjectModel(Heroes.name) private heroesModel: Model<HeroesDocument>,
    private fileService: FileService) {
        
    }
    async getAll(count = 5, offset = 0) : Promise<Heroes[]>{
        const heroes = await this.heroesModel.find().skip(offset).limit(count)
        return heroes;
    }

    async getById(id: string) : Promise<Heroes>{
        return this.heroesModel.findById(id)
    }

    async create(heroDto: CreateHeroDto, picture) : Promise<Heroes> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const newHero = await this.heroesModel.create({...heroDto, picture : picturePath})
        return newHero;
    }

    async update(id: string, heroDto: UpdateHeroDto, ): Promise<Heroes> {
        return this.heroesModel.findByIdAndUpdate(id, heroDto,{new: true})
    }

    async remove(id: string): Promise<Heroes> {
        return this.heroesModel.findByIdAndDelete(id)
    }
}
