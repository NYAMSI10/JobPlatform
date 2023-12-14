import {Injectable} from '@nestjs/common';
import {Prisma} from '@prisma/client'
import {DatabaseService} from "../database/database.service";

@Injectable()
export class JobService {
    constructor(private readonly prisma: DatabaseService) {
    }

    async create(createJobDto: Prisma.JobCreateInput) {

        const job = await this.prisma.job.create({
            data: createJobDto,
            include:{
                user:true,
                contrat:true,
            }

        })

        return job;
    }

    findAll() {
        return `This action returns all job`;
    }

    findOne(id: number) {
        return `This action returns a #${id} job`;
    }

    update(id: number, updateJobDto: Prisma.JobUpdateInput) {
        return `This action updates a #${id} job`;
    }

    remove(id: number) {
        return `This action removes a #${id} job`;
    }
}
