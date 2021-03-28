/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AssigneesModule } from './assignees/assignees.module';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }
    ),
    ProjectsModule,
    AssigneesModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
}
