/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";


@InputType()
export class UpdateAssigneeInput{

    @Field()
    @IsNotEmpty()
    assigneeId: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field({nullable:true})
    @IsOptional()   // it will pass validator if empty
    @IsNotEmpty()
    role?: string;  //? means optional
}