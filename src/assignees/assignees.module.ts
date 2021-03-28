/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { ProjectsResolver } from './projects.resolver';
import { AssigneesService } from './assignees.service';


@Module({
  imports: [
  ],
  controllers: [],
  providers: [AssigneesService],
  exports: [AssigneesService] // so it can be imported by projectmodule or another
})


export class AssigneesModule {}
