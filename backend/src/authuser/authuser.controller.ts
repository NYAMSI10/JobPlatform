import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards} from '@nestjs/common';
import {AuthuserService} from "./authuser.service";
import {Prisma} from "@prisma/client";
import {AuthuserGuard} from "./authuser.guard";
import {Request} from "express";

@Controller('authuser')
export class AuthuserController {

    constructor(private  authService: AuthuserService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    loginUser(@Body() dataUser: Prisma.UserCreateInput, @Req() req , @Res() res)
    {
        return this.authService.loginuser(dataUser, req,res)
    }
    @UseGuards(AuthuserGuard)
    @Get('info')
    async user(@Req() req){
        return this.authService.user(req)
    }

    @Get('logout')
    async logout(@Req() req, @Res() res) {
        return this.authService.logout(req,res)

    }





}
