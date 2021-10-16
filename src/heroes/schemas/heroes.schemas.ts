import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HeroesDocument = Heroes & Document

@Schema()
export class Heroes {
    @Prop()
    nickname: string;

    @Prop()
    real_name: string;

    @Prop()
    original_description: string;

    @Prop()
    superpowers: string;


    @Prop()
    catch_phrase: string;

    @Prop()
    picture: string;

}

export const HeroesSchema = SchemaFactory.createForClass(Heroes);



