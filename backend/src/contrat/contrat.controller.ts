import {Controller, Get, Post, Body, Patch, Param, Delete, Redirect, NotFoundException, Res, Req} from '@nestjs/common';
import { ContratService } from './contrat.service';
import {Prisma} from  '@prisma/client'
import {Response, Request} from "express";

@Controller('contrat/')
export class ContratController {
  constructor(private readonly contratService: ContratService) {}

  @Post()
  async create(@Body() createContratDto: Prisma.ContratCreateInput,@Res() response:Response, @Req() request:Request) {

      const contrat= await this.contratService.create(createContratDto);
      return response.status(200).json({
        message: "contrat add",
        result: contrat
      })

  }

  @Get()
  async findAll() {

      return this.contratService.findAll();


  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

      return this.contratService.findOne(+id);


  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateContratDto: Prisma.ContratUpdateInput) {


      return this.contratService.update(+id, updateContratDto);


  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response:Response, @Req() request:Request) {

      const cntart =    await this.contratService.remove(+id);

      return response.status(200).json({
          status: "ok!",
          message:"Contrat delete"
      })

  }
}
