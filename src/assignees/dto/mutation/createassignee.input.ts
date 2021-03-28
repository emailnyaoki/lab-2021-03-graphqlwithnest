/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";


@InputType()
export class CreateAssigneeInput{

    
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    role: string;
}