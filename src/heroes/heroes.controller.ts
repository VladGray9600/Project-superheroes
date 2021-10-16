import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query, Redirect, Res, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateHeroDto } from './dto/create-heroes.dto';
import { UpdateHeroDto } from './dto/update-heroes.dto';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly heroesService : HeroesService){}

    @Get('/')
    @HttpCode(HttpStatus.OK)
    getAll(@Query('count') count: number, @Query('offset') offset: number){
        count = typeof +count === 'number' ? +count : undefined;
        offset = typeof +offset === 'number' ? +offset : undefined;
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
    create(@Body(new ValidationPipe()) createHeroDto: CreateHeroDto){
        return this.heroesService.create(createHeroDto)
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Body() updateHeroDto: UpdateHeroDto, @Param('id') id: string){
        return this.heroesService.update(id, updateHeroDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    delete(@Param('id') id: string){
        console.log(id);
        console.log(typeof id);
        
        
        return this.heroesService.delete(id)
    }
}
