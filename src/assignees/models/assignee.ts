/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
@ObjectType()
export class Assignee {

    @Field(()=>String)
    @IsNotEmpty()
    assigneeId: string;

    @Field(()=>String)
    @IsNotEmpty()
    name: string;

    @Field(()=>String)
    @IsNotEmpty()
    role:string;
}