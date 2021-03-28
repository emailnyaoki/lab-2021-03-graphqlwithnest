/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class AssignToProjectInput{
    
    @Field()
    @IsNotEmpty()
    projectId: string;

    @Field()
    @IsNotEmpty()
    assignId: string;
}