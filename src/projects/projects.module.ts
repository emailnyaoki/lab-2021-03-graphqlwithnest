/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssigneesModule } from 'src/assignees/assignees.module';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';


@Module({
  imports: [AssigneesModule
  ],
  controllers: [],
  providers: [ProjectsResolver, ProjectsService]
})


export class ProjectsModule {}
