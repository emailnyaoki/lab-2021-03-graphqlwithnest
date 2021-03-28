/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Assignee } from "src/assignees/models/assignee";


/* eslint-disable prettier/prettier */
@ObjectType()
export class Project {

    @Field(()=>String)
    @IsNotEmpty()
    projectId: string;

    @Field(()=>String)
    @IsNotEmpty()
    name: string;

    @Field({nullable:true})
    @IsOptional()
    description?:string;


    @Field(()=>[Assignee], {nullable: 'items' })
    @IsOptional()
    assignees?:Assignee[];


}