/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

import { CreateAssigneeInput } from "./dto/mutation/createassignee.input";
import { DeleteAssigneeInput } from "./dto/mutation/deleteassignee.input";
import { UpdateAssigneeInput } from "./dto/mutation/updateassignee.input";
import {AssignToProjectInput} from "./dto/mutation/assigntoproject.input"

import { GetAssigneeArgs } from "./dto/query/getassignee.args";
import {GetAssigneesByProjectArgs} from "./dto/query/getassigneesbyproject.args"


import {Assignee} from './models/assignee'
import {v4 as uuid} from 'uuid'
import { ProjectData } from "src/data/project.data";



@Injectable()
export class AssigneesService {

    private assignees:Assignee[] = []   // mock up data

    constructor(){
        this.assignees = ProjectData.getInstance().initAssignees()
    }

    public createAssignee(createAssigneeData: CreateAssigneeInput): Assignee {
        
        const newAssignee : Assignee = {
            assigneeId: uuid(),
            ...createAssigneeData
        }

        this.assignees.push(newAssignee)

        return newAssignee

    }

    public updateAssignee(updateAssigneeData: UpdateAssigneeInput): Assignee {
        
        const foundAssignee = this.assignees.find((p)=>p.assigneeId===updateAssigneeData.assigneeId)
        
        Object.assign(foundAssignee,updateAssigneeData)

        return foundAssignee
    }

    public deleteAssignee(deleteAssigneeData: DeleteAssigneeInput): Assignee {
        const foundidx = this.assignees.findIndex(assignee=>assignee.assigneeId===deleteAssigneeData.assigneeId)

        const deletedAssignee = this.assignees[foundidx]

        this.assignees.splice(foundidx)

        return deletedAssignee

    }

    public getAssignee(getAssigneeArgs: GetAssigneeArgs):Assignee{
        return this.assignees.find(p=>p.assigneeId===getAssigneeArgs.assigneeId)
    }

    public getAllAssignees():Assignee[]{
        return this.assignees
    }

    
}