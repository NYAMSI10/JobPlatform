import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {Prisma} from "@prisma/client";
import {DatabaseService} from "../database/database.service";
import * as bcrypt from 'bcrypt';
import {HelpersService} from "../helpers/helpers.service";
@Injectable()
export class UserService {
  constructor( private  readonly  prisma: DatabaseService, private  readonly verified: HelpersService) {
  }
  async create(createUserDto: Prisma.UserCreateInput) {
    const hash = await bcrypt.hash(createUserDto.password, 10);

    if (await this.verified.register(createUserDto.email))
    {
      throw new NotFoundException('Email existe already')
    }

    return this.prisma.user.create({
      data :{
        name : createUserDto.name,
        lastname : createUserDto.lastname,
        email : createUserDto.email,
        role : "USER",
        password:  hash
      } }) ;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {

    if (!await this.verified.user(id))
    {
      throw new HttpException('User not Found', HttpStatus.NOT_FOUND);

    }
    return this.prisma.user.findFirst({where:{id}})

  }

 async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if (!await this.verified.user(id))
    {
      throw new HttpException('User not Found', HttpStatus.NOT_FOUND);

    }

    return this.prisma.user.update({where: {id}, data: updateUserDto})

  }

  async remove(id: number) {
    if (!await this.verified.user(id))
    {
        throw new NotFoundException('User Not Found')

    }
  return this.prisma.user.delete({where:{id}})
  }
}
