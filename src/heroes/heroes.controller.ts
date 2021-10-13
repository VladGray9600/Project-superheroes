import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateHeroDto } from './dto/create-heroes.dto';
import { UpdateHeroDto } from './dto/update-heroes.dto';
import { HeroesService } from './heroes.service';
import { Heroes } from './schemas/heroes.schemas';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService : HeroesService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll(@Query('count') count: number, @Query('offset') offset: number){
        return this.heroesService.getAll(count, offset)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    getById(@Param('id') id: string){
        return this.heroesService.getById(id)
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
    @HttpCode(HttpStatus.CREATED)
    create(@UploadedFiles() files, @Body() createHeroDto: CreateHeroDto){
        const  { picture } = files
        return this.heroesService.create(createHeroDto, picture[0]);
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() updateHeroDto: UpdateHeroDto, @Param('id') id: string){
        return this.heroesService.update(id, updateHeroDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    remove(@Param('id') id: string){
        return this.heroesService.remove(id)
    }
}
