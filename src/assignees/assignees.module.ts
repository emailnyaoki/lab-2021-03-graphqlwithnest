/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssigneesResolver } from './assignees.resolver';
//import { ProjectsResolver } from './projects.resolver';
import { AssigneesService } from './assignees.service';


@Module({
  imports: [
  ],
  controllers: [],
  providers: [AssigneesResolver,  AssigneesService],
  exports: [AssigneesService] // so it can be imported by projectmodule or another
})


export class AssigneesModule {}
