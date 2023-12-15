import {
  Body,
  Controller,
  Delete,
  Get, HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common';
import {UserService} from './user.service';
import {Prisma} from '@prisma/client'
import {Request, Response} from "express";
import {Roles} from "../role/role.decorator";
import {Role} from "../role/role.enum";
import {RoleGuard} from "../role/role.guard";
import {SkipAuth} from "../role/public.decorator";
import {AuthuserService} from "../authuser/authuser.service";
import {AuthGuard} from "../authuser/auth.guard";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
// JEAN CHARLES
  @Roles(Role.ADMIN,Role.USER,Role.COMPANY)
  @UseGuards(RoleGuard,AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @Roles(Role.ADMIN,Role.USER,Role.COMPANY)
  @UseGuards(RoleGuard,AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string,@Res() response:Response, @Req() request:Request) {
    try {
    await this.userService.remove(+id);
      return response.status(200).json({
        status: "ok!",
        message:"User delete"
      })
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'User Not Found',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }


}
