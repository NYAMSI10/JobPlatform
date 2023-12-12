import {Body, Controller, Post} from '@nestjs/common';
import {AuthuserService} from "./authuser.service";
import {Prisma} from "@prisma/client";

@Controller('authuser')
export class AuthuserController {

    constructor(private  authService: AuthuserService) {}

    @Post()
    loginUser(@Body() dataUser: Prisma.UserCreateInput)
    {
        return this.authService.loginuser(dataUser)
    }


}
