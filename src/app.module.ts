import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentController } from './assignments/assignments.controller';

@Module({
  imports: [],
  controllers: [AppController, AssignmentController],
  providers: [AppService],
})
export class AppModule {}
