import { Module } from '@nestjs/common';
import { ContratService } from './contrat.service';
import { ContratController } from './contrat.controller';
import {HelpersService} from "../helpers/helpers.service";
import {UserService} from "../user/user.service";
import {RoleGuard} from "../role/role.guard";
import {AuthGuard} from "../authuser/auth.guard";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports:[JwtModule],
  controllers: [ContratController],
  providers: [ContratService,HelpersService,UserService,RoleGuard,AuthGuard],
})
export class ContratModule {}
