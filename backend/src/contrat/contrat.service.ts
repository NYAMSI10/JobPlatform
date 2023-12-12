import {Injectable, NotFoundException} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class ContratService {
  constructor( private  readonly  prisma: DatabaseService) {
  }
  async create(createContrat: Prisma.ContratCreateInput) {
    return this.prisma.contrat.create({data : createContrat});
  }

  async findAll() {
    return  this.prisma.contrat.findMany();
  }

  async findOne(id: number) {
    const  contrat = await this.prisma.contrat.findUnique({where: {id: id}});

    if (!contrat) {
      throw new NotFoundException('Contrat Not Found')
    }

    return this.prisma.contrat.findFirst({where:{id:id}})
  }

  async update(id: number, updateContratDto: Prisma.ContratUpdateInput) {
    const  contrat = await this.prisma.contrat.findUnique({where: {id: id}});
    if (!contrat) {
      throw new NotFoundException('Contrat Not Found')
    }
    return  this.prisma.contrat.update({
      where: {id},
      data: updateContratDto
    });

  }

  async remove(id: number) {
    const  contrat = await this.prisma.contrat.findUnique({where: {id: id}});

    if (!contrat) {
      throw new NotFoundException('Contrat Not Found')
    }

    return this.prisma.contrat.delete({
      where:{id}
    });

  }
}
