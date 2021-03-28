/* eslint-disable prettier/prettier */
import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from 'class-validator'

@ArgsType()
export class GetAssigneesByProjectArgs{

    @Field(()=>String)  
    @IsNotEmpty()
    projectId:string

}