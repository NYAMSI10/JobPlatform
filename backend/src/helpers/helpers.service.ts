import { Injectable } from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {DatabaseService} from "../database/database.service";

@Injectable()
export class HelpersService {
    constructor( private  readonly  prisma: DatabaseService) {}

    async register(email: string) {

        const  user= await this.prisma.user.findUnique({where:{email}})
        return user
    }
    async uniquecontrat(name: string) {

        const  user= await this.prisma.contrat.findFirst({where:{name:name}})
        return user
    }

    async user(id: number){
        const  user= await this.prisma.user.findUnique({where:{id}})
        return user
    }

    async job(id: number){
        const  job= await this.prisma.job.findUnique({where:{id}})
        return job
    }



}






