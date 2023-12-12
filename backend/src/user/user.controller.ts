import {Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpStatus, HttpException} from '@nestjs/common';
import { UserService } from './user.service';
import {Prisma} from  '@prisma/client'
import {Request, Response, response} from "express";

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

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
