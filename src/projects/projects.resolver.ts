/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { CreateProjectInput } from "./dto/mutation/createproject.input";
import { UpdateProjectInput } from "./dto/mutation/updateproject.input";
import { DeleteProjectInput } from "./dto/mutation/deleteproject.input";
import { GetProjectArgs } from "./dto/query/getproject.args";
import { GetProjectsArgs } from "./dto/query/getprojects.args";
import { Project } from "./models/project";
import { ProjectsService } from "./projects.service";

import { AssigneesService } from "src/assignees/assignees.service";
import { Assignee } from "src/assignees/models/assignee";
import { GetAssigneeArgs } from "src/assignees/dto/query/getassignee.args";
import { CreateAssigneeInput } from "src/assignees/dto/mutation/createassignee.input";
import { UpdateAssigneeInput } from "src/assignees/dto/mutation/updateassignee.input";
import { DeleteAssigneeInput } from "src/assignees/dto/mutation/deleteassignee.input";
import { AssigneeToProjectInput } from "./dto/mutation/assigneetoproject.input";


@Resolver(()=> Project)
export class ProjectsResolver{


    constructor(
        private readonly projectsService: ProjectsService,
        private readonly assigneesService: AssigneesService,
    ){}


    /*********************************************************************************/
    /** QUERY */
    /*********************************************************************************/
    

    /** if it were normally from database */
    /* async getProject: Promise<Project> {
        
    } */

    @Query(()=>Project, {name:'project', nullable:true})  //nullable:true if a project not found
    getProject(@Args() getProjectArgs:GetProjectArgs): Project {
        return this.projectsService.getProject(getProjectArgs)
    }

    @Query(()=>[Project], {name:'projects', nullable:'items'})   // give a name for this query for API consumer
    getProjects(@Args() getProjectsArgs:GetProjectsArgs):Project[] {
        return this.projectsService.getProjects(getProjectsArgs)
    }

    @Query(()=>[Project], {name:'allprojects', nullable:'items'})   // give a name for this query for API consumer
    getAllProjects(@Args('first', { nullable: true}) first?: number):Project[] {
        
        if (first){
            return this.projectsService.getAllProjects().slice(0,first)
        }
        
        return this.projectsService.getAllProjects()
    }

    @Query(()=>Assignee, {name:'assignee', nullable:true})  //nullable:true if a assignee not found
    getAssignee(@Args() getAssigneeArgs:GetAssigneeArgs): Assignee {
        return this.assigneesService.getAssignee(getAssigneeArgs)
    }

  
    @Query(()=>[Assignee], {name:'allassignees', nullable:'items'})   // give a name for this query for API consumer
    getAllAssignees():Assignee[] {
        return this.assigneesService.getAllAssignees()
    }

    @ResolveField(()=>[Assignee],{name:'assignees', nullable:'items'}) 
    getAsignees(
        @Parent() project:Project,
        @Args('first', { nullable: true}) first?: number ):Assignee[]{
        
        if (first){
            if (project.assignees){
                return project.assignees.slice(0,first)
            }
        }
        return project.assignees || []
    } 

    /*********************************************************************************/
    /** MUTATION */
    /*********************************************************************************/


    @Mutation(()=>Project)
    createProject(@Args('createProject')  createProjectInput: CreateProjectInput): Project {
        return this.projectsService.createProject(createProjectInput)
    }


    @Mutation(()=>Project)
    updateProject(@Args('updateProject')  updateProjectInput: UpdateProjectInput): Project {
        return this.projectsService.updateProject(updateProjectInput)
    }

    @Mutation(()=>Project)
    deleteProject(@Args('deleteProject')  deleteProjectInput: DeleteProjectInput): Project {
        return this.projectsService.deleteProject(deleteProjectInput)
    }


    @Mutation(()=>Assignee)
    createAssignee(@Args('createAssignee')  createAssigneeInput: CreateAssigneeInput): Assignee {
        return this.assigneesService.createAssignee(createAssigneeInput)
    }


    @Mutation(()=>Assignee)
    updateAssignee(@Args('updateAssignee')  updateAssigneeInput: UpdateAssigneeInput): Assignee {
        return this.assigneesService.updateAssignee(updateAssigneeInput)
    }

    @Mutation(()=>Assignee)
    deleteAssignee(@Args('deleteAssignee')  deleteAssigneeInput: DeleteAssigneeInput): Assignee {
        return this.assigneesService.deleteAssignee(deleteAssigneeInput)
    }

    @Mutation(()=>Assignee)
    assigneeToProject(@Args('assigneeToProject')  assigneeToProjectInput: AssigneeToProjectInput): Assignee {
        return this.projectsService.assigneeToProject(assigneeToProjectInput)
    }





}