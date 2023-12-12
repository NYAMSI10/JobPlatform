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

    async user(id: number){
        const  user= await this.prisma.user.findUnique({where:{id}})
        return user
    }

}






