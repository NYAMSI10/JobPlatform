import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import {DatabaseModule} from "../database/database.module";
import {RoleGuard} from "../role/role.guard";
import {HelpersService} from "../helpers/helpers.service";

@Module({
  imports:[DatabaseModule],
  controllers: [JobController],
  providers: [JobService,RoleGuard,HelpersService],
})
export class JobModule {}
