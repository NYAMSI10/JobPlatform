import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Req,
    Res,
    UseGuards
} from '@nestjs/common';
import {ContratService} from './contrat.service';
import {Prisma} from '@prisma/client'
import {Request, Response} from "express";
import {Roles} from "../role/role.decorator";
import {Role} from "../role/role.enum";
import {RoleGuard} from "../role/role.guard";
import {SkipAuth} from "../role/public.decorator";
import {AuthGuard} from "../authuser/auth.guard";

@Controller('contrat/')
export class ContratController {
    constructor(private readonly contratService: ContratService) {
    }

    @Roles(Role.ADMIN)
    @UseGuards( RoleGuard)
    @Post()
    async create(@Body() createContratDto: Prisma.ContratCreateInput, @Res() response: Response, @Req() request: Request) {

        const contrat = await this.contratService.create(createContratDto);
        return response.status(200).json({
            message: "contrat add",
            result: contrat
        })

    }

    //@Roles(Role.ADMIN)
    //@UseGuards(AuthGuard)
    @SkipAuth()
    @Get()
    async findAll() {

        return this.contratService.findAll();


    }
    @Get(':id')
    async findOne(@Param('id') id: string) {

        return this.contratService.findOne(+id);


    }
    @Roles(Role.ADMIN)
    @UseGuards(RoleGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateContratDto: Prisma.ContratUpdateInput) {


        return this.contratService.update(+id, updateContratDto);


    }
    @Roles(Role.ADMIN)
    @UseGuards(RoleGuard)
    @Delete(':id')
    async remove(@Param('id') id: string, @Res() response: Response, @Req() request: Request) {

        try {
            await this.contratService.remove(+id)
            return response.status(200).json({
                status: "ok!",
                message: "Contrat delete"
            })
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Contrat Not Found',
            }, HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }
}
