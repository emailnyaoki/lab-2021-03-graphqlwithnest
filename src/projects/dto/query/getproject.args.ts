/* eslint-disable prettier/prettier */
import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from 'class-validator'

@ArgsType()
export class GetProjectArgs{

    @Field(()=>String)  
    @IsNotEmpty()
    projectId:string

}