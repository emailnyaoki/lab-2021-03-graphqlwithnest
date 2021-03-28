/* eslint-disable prettier/prettier */
import { Assignee } from "src/assignees/models/assignee"
import { Project } from "src/projects/models/project"
import {v4 as uuid} from 'uuid'

export class ProjectData {

    private projects:Project[]
    private assignees: Assignee[]

    private static instance: ProjectData;

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): ProjectData {
        if (!ProjectData.instance) {
            ProjectData.instance = new ProjectData();
        }

        return ProjectData.instance;
    }

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor(){ 
        this.projects= []
        this.assignees= []        
    }

    public initProjects(): Project[]{
        this.projects = [
            {
                projectId: "8801aa98-1892-4bfc-833d-e2070566425b",
                name: "first project",
                description: "my first project",
              },
              {
                projectId: "eaee2bf0-7280-4b7e-8f77-0fb155fa89e6",
                name: "second project",
                description: "my second project"
              },
              {
                projectId: "265ec140-5503-443f-abd1-d5aa870e02fa",
                name: "third project",
                description: "my third project"
              },
              {
                projectId: "9c3d7ca0-8833-4403-9a1c-d98d3e43ec07",
                name: "fourth project",
                description: "my fourth project"
              },
              {
                projectId: "61dfcebd-4408-4fd4-ad58-c8ab062c5c91",
                name: "fifth project",
                description: "my fifth project"
              }
        ]

        return this.projects
    }

    public initAssignees(): Assignee[]{
        this.assignees = [
            {
                assigneeId: "8b54faf1-71c1-47c2-adcd-75bf5f41609d",
                name: "Oki",
                role: "Manager"
              },
              {
                assigneeId: "21dd04fe-c23e-4925-baf7-a204c7a4955b",
                name: "Nando",
                role: "Back End Developer"
              },
              {
                assigneeId: "128319a4-b95b-4656-9e99-ed1849d3abd4",
                name: "Rakhim",
                role: "Front End Developer"
              },
              {
                assigneeId: "de67ce9c-c010-42fd-b6b7-963a3a096725",
                name: "Lain",
                role: "UI/UX Designer"
              }
        ]

        return this.assignees
    }


    
}