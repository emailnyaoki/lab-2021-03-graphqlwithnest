/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateProjectInput } from "./dto/mutation/createproject.input";
import { DeleteProjectInput } from "./dto/mutation/deleteproject.input";
import { UpdateProjectInput } from "./dto/mutation/updateproject.input";
import { GetProjectArgs } from "./dto/query/getproject.args";
import { GetProjectsArgs } from "./dto/query/getprojects.args";

import {Project} from './models/project'
import {v4 as uuid} from 'uuid'
import { ProjectData } from "src/data/project.data";
import { AssigneeToProjectInput } from "./dto/mutation/assigneetoproject.input";
import { AssigneesService } from "src/assignees/assignees.service";
import { Assignee } from "src/assignees/models/assignee";
import { GetAssigneeArgs } from "src/assignees/dto/query/getassignee.args";



@Injectable()
export class ProjectsService {

    private projects:Project[] = []   // mock up data
    

    constructor(
        private readonly assigneesService: AssigneesService,
    ){
        this.projects = ProjectData.getInstance().initProjects()

    }


    public createProject(createProjectData: CreateProjectInput): Project {
        
        const newProject : Project = {
            projectId: uuid(),
            ...createProjectData
        }

        this.projects.push(newProject)

        return newProject

    }

    public updateProject(updateProjectData: UpdateProjectInput): Project {
        
        const foundProject = this.projects.find((p)=>p.projectId===updateProjectData.projectId)

        Object.assign(foundProject,updateProjectData)

        return foundProject
    }

    public deleteProject(deleteProjectData: DeleteProjectInput): Project {
        const foundidx = this.projects.findIndex(project=>project.projectId===deleteProjectData.projectId)

        const deletedProject = this.projects[foundidx]

        this.projects.splice(foundidx)

        return deletedProject

    }

    public getProject(getProjectArgs: GetProjectArgs):Project{
        return this.projects.find(p=>p.projectId===getProjectArgs.projectId)
    }

    public getProjects(getProjectsArgs: GetProjectsArgs):Project[] {
        return getProjectsArgs.projectIds.map(projectId=>this.getProject({projectId}))  
    }

    public getAllProjects():Project[] {
        return this.projects

    }

    public getAssignees(assigneeIds:string[]):Assignee[] {
        
        if (assigneeIds)
        return assigneeIds.map(assigneeId=>{
            const args = new GetAssigneeArgs()
            args.assigneeId = assigneeId
            const assignee = this.assigneesService.getAssignee(args)
            return assignee
        })

        return []

    }



    public assigneeToProject(assigneeToProjectInput: AssigneeToProjectInput):Assignee {
        
        const args = new GetAssigneeArgs()
        args.assigneeId = assigneeToProjectInput.assigneeId
        const assignee = this.assigneesService.getAssignee(args)

        const argsPro = new GetProjectArgs()
        argsPro.projectId = assigneeToProjectInput.projectId

        const project = this.getProject(argsPro)

        if (project.assignees_rel){
            const foundproject = project.assignees_rel.includes(assigneeToProjectInput.assigneeId)
            if (!foundproject)
                project.assignees_rel.push(assigneeToProjectInput.assigneeId)
        }else{
            project.assignees_rel = [assigneeToProjectInput.assigneeId]
            
        }


        /* if (project.assignees){
            const foundproject = project.assignees.find(a=>a.assigneeId===assigneeToProjectInput.assigneeId)
            if (!foundproject)
                project.assignees.push(assignee.)
        }else{
            project.assignees = [assignee]
            
        }
 */
        //console.log(project.assignees)

        return assignee

        

    }



}