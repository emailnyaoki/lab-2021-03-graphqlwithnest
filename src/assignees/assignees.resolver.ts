/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

/* import { CreateAssigneeInput } from "./dto/mutation/createassignee.input";
import { UpdateAssigneeInput } from "./dto/mutation/updateassignee.input";
import { DeleteAssigneeInput } from "./dto/mutation/deleteassignee.input";
import { GetAssigneeArgs } from "./dto/query/getassignee.args";
import { GetAssigneesArgs } from "./dto/query/getassignees.args";
import { Assignee } from "./models/assignee";
import { AssigneesService } from "./assignees.service";

import { AssigneesService } from "src/assignees/assignees.service";
import { Assignee } from "src/assignees/models/assignee";
import { GetAssigneeArgs } from "src/assignees/dto/query/getassignee.args";
import { CreateAssigneeInput } from "src/assignees/dto/mutation/createassignee.input";
import { UpdateAssigneeInput } from "src/assignees/dto/mutation/updateassignee.input";
import { DeleteAssigneeInput } from "src/assignees/dto/mutation/deleteassignee.input";
import { AssigneeToAssigneeInput } from "./dto/mutation/assigneetoassignee.input"; */

import { Assignee } from "src/assignees/models/assignee";
import { AssigneesService } from "src/assignees/assignees.service";


@Resolver(()=> Assignee)
export class AssigneesResolver{


    constructor(
        private readonly assigneesService: AssigneesService,
    ){}


    /*********************************************************************************/
    /** QUERY */
    /*********************************************************************************/

    @Query(()=>[Assignee], {name:'allassignees', nullable:'items'})   // give a name for this query for API consumer
    getAllAssignees():Assignee[] {
        return this.assigneesService.getAllAssignees()
    }
}