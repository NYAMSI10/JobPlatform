import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";
import {HelpersService} from "../helpers/helpers.service";
import * as bcrypt from 'bcrypt';
import {ConfigService} from "@nestjs/config";
import {JwtService} from "@nestjs/jwt";
import {request, Request, Response} from "express";

@Injectable()
export class AuthuserService {

    constructor(private readonly prisma: DatabaseService, private readonly verified: HelpersService,
         private configService: ConfigService, private jwtService: JwtService) {}

    async loginuser(dataUser: Prisma.UserCreateInput, req: Request, res: Response){

        const user = await this.prisma.user.findUnique({where:{email: dataUser.email}})


         if (!user)
         {
             throw new NotFoundException('Email Not Found')
         }
        const isMatch = await bcrypt.compareSync(dataUser.password,user.password);


         if (user && isMatch)
         {
             const payload = { userId: user.id, email: user.email , role: user.role};
              const token = await  this.jwtService.signAsync(payload)
             res.cookie('jwt',token, {httpOnly: true})

            return res.send({ message: 'Logged in succefully' })



         }else {
             throw new NotFoundException('Password Not Correct')

         }
    }

    async user(req: Request){

        const cookie = req.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(cookie)

        return data;
    }

    async logout(req: Request, res: Response) {
        res.clearCookie('jwt');

        return res.send({ message: 'Logged out succefully' });
    }

}
