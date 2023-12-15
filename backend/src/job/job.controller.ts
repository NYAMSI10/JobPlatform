import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {JobService} from './job.service';
import {Prisma} from '@prisma/client'
import {Roles} from "../role/role.decorator";
import {Role} from "../role/role.enum";
import {RoleGuard} from "../role/role.guard";
import {SkipAuth} from "../role/public.decorator";

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Roles(Role.COMPANY)
  @UseGuards(RoleGuard)
  @Post()
  create(@Body() createJobDto: Prisma.JobCreateInput) {
    return this.jobService.create(createJobDto);
  }

  @SkipAuth()
  @Get()
  findAll() {
    return this.jobService.findAll();
  }
  @SkipAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(+id);
  }

  @Roles(Role.COMPANY)
  @UseGuards(RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: Prisma.JobUpdateInput) {
    return this.jobService.update(+id, updateJobDto);
  }

  @Roles(Role.COMPANY)
  @UseGuards(RoleGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(+id);
  }
  @Roles(Role.COMPANY)
  @UseGuards(RoleGuard)
  @Get('company/:id')
  findByCompany(@Param('id') id: string) {
    return this.jobService.findByCompany(+id);
  }
}
