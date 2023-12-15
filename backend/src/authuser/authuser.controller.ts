import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res} from '@nestjs/common';
import {AuthuserService} from "./authuser.service";
import {Prisma} from "@prisma/client";
import {SkipAuth} from "../role/public.decorator";

@Controller('authuser')
export class AuthuserController {

    constructor(private authService: AuthuserService) {
    }

    @SkipAuth()
    @HttpCode(HttpStatus.OK)
    @Post()
    loginUser(@Body() dataUser: Prisma.UserCreateInput, @Req() req, @Res() res) {
        return this.authService.loginuser(dataUser, req, res)
    }

    @SkipAuth()
    @Get('info')
    async user(@Req() req) {
        return this.authService.user(req)
    }

    @SkipAuth()
    @Get('logout')
    async logout(@Req() req, @Res() res) {
        return this.authService.logout(req, res)

    }


}
