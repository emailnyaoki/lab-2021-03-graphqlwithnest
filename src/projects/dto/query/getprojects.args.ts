/* eslint-disable prettier/prettier */
import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray } from 'class-validator'

@ArgsType()
export class GetProjectsArgs{

    @Field(()=>[String])    // return array of String (declarative way)
    @IsArray()
    projectIds:string[];    // return array of string

}