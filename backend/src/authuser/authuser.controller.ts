import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res} from '@nestjs/common';
import {AuthuserService} from "./authuser.service";
import {Prisma} from "@prisma/client";

@Controller('authuser')
export class AuthuserController {

    constructor(private  authService: AuthuserService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    loginUser(@Body() dataUser: Prisma.UserCreateInput, @Req() req , @Res() res)
    {
        return this.authService.loginuser(dataUser, req,res)
    }

    @Get('info')
    async user(@Req() req){
        return this.authService.user(req)
    }

    @Get('logout')
    async logout(@Req() req, @Res() res) {
        return this.authService.logout(req,res)

    }



}
