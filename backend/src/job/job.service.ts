import {Injectable, NotFoundException} from '@nestjs/common';
import {Prisma} from '@prisma/client'
import {DatabaseService} from "../database/database.service";
import {HelpersService} from "../helpers/helpers.service";

@Injectable()
export class JobService {
    constructor(private readonly prisma: DatabaseService, private readonly verified: HelpersService) {
    }

    async create(createJobDto: Prisma.JobCreateInput) {

        const job = await this.prisma.job.create({
            data: createJobDto,
            include: {
                user: true,
                contrat: true,
            }

        })

        return job;
    }

    findAll() {

        return this.prisma.job.findMany({
            include: {
                user: true,
                contrat: true,
            }

        })

    }

   async findOne(id: number) {

        if (!await this.verified.job(id)) {
            throw new NotFoundException('Job Not Found')
        }

        return this.prisma.job.findFirst({
            where: {
                id: id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true
                    }
                },
                contrat: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }

    async update(id: number, updateJobDto: Prisma.JobUpdateInput) {
        if (!await this.verified.job(id)) {
            throw new NotFoundException('Job Not Found')
        }

        const job = await this.prisma.job.update({
            where: {
                id: id
            },
            data: updateJobDto,
            include: {
                user: true,
                contrat: true,
            }
        })

        return job

    }

   async remove(id: number) {
        if (!await this.verified.job(id)) {
            throw new NotFoundException('Job Not Found')
        }
        const job = await this.prisma.job.delete({
            where: {
                id: id
            },
        })
        return 'Job Delete'
    }

    async findByCompany(id: number) {
        if (!await this.verified.user(id)) {
            throw new NotFoundException('Company Not Found')
        }

        const job = await this.prisma.job.findMany({
            where: {
                userId: id
            },
        })
        return job
    }
}
