import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";
import {HelpersService} from "../helpers/helpers.service";
import * as bcrypt from 'bcrypt';
import {ConfigService} from "@nestjs/config";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthuserService {

    constructor(private readonly prisma: DatabaseService, private readonly verified: HelpersService,
         private configService: ConfigService, private jwtService: JwtService) {}

    async loginuser(dataUser: Prisma.UserCreateInput){

        const user = await this.prisma.user.findUnique({where:{email: dataUser.email}})


         if (!user)
         {
             throw new NotFoundException('Email Not Found')
         }
        const isMatch = await bcrypt.compareSync(dataUser.password,user.password);


         if (user && isMatch)
         {
             const payload = { userId: user.id, email: user.email , role: user.role};

           return {
               email: user.email,
                token: await  this.jwtService.signAsync(payload)

           }



         }else {
             throw new UnauthorizedException();

         }
    }




}
