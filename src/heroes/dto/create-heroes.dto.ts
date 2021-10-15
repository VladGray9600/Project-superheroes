import { IsNotEmpty, IsString, MinLength } from "class-validator"


export class CreateHeroDto {
    @IsNotEmpty()
    @MinLength(3)
    readonly nickname : string

    @IsNotEmpty()
    @IsString()
    readonly real_name : string
    
    @IsNotEmpty()
    @MinLength(3)
    readonly original_description : string
    
    readonly picture: string
    readonly superpowers : string
    readonly catch_phrase : string
    readonly createdAd : Date
}