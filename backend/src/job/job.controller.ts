import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {JobService} from './job.service';
import {Prisma} from '@prisma/client'
import {Roles} from "../role/role.decorator";
import {Role} from "../role/role.enum";
import {AuthuserGuard} from "../authuser/authuser.guard";
import {RoleGuard} from "../role/role.guard";

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Roles(Role.COMPANY)
  @UseGuards(AuthuserGuard,RoleGuard)
  @Post()
  create(@Body() createJobDto: Prisma.JobCreateInput) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: Prisma.JobUpdateInput) {
    return this.jobService.update(+id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(+id);
  }
}
