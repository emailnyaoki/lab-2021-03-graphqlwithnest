/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class AssigneeToProjectInput{
    
    @Field()
    @IsNotEmpty()
    projectId: string;

    @Field()
    @IsNotEmpty()
    assigneeId: string;
}