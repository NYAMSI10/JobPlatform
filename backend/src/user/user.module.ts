import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {HelpersService} from "../helpers/helpers.service";
import {RoleGuard} from "../role/role.guard";
import {AuthGuard} from "../authuser/auth.guard";
import {JwtModule} from "@nestjs/jwt";


@Module({
  imports:[JwtModule],
  controllers: [UserController],
  providers: [UserService,HelpersService,RoleGuard,AuthGuard],
})
export class UserModule {}
