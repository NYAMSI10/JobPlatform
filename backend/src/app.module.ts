import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ContratModule } from './contrat/contrat.module';
import {ContratController} from "./contrat/contrat.controller";
import {ContratService} from "./contrat/contrat.service";
import { UserModule } from './user/user.module';
import {UserController} from "./user/user.controller";
import {UserService} from "./user/user.service";
import { HelpersService } from './helpers/helpers.service';
import { HelpersModule } from './helpers/helpers.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';
import { JobModule } from './job/job.module';


import {JwtModule} from "@nestjs/jwt";
import {AuthuserController} from "./authuser/authuser.controller";
import {AuthGuard} from "./authuser/auth.guard";
import {AuthuserService} from "./authuser/authuser.service";
import {APP_GUARD} from "@nestjs/core";

@Module({

  imports: [JwtModule,DatabaseModule, ContratModule, UserModule, HelpersModule,  ConfigModule.forRoot(), RoleModule,JobModule],
  controllers: [ContratController,UserController,AuthuserController],
  providers: [ContratService,UserService, HelpersService,AuthuserService,  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}
