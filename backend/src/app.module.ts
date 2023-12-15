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
import { AuthuserModule } from './authuser/authuser.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';

@Module({
  imports: [DatabaseModule, ContratModule, UserModule, HelpersModule, AuthuserModule, ConfigModule.forRoot(), RoleModule],
  controllers: [ContratController,UserController],
  providers: [ContratService,UserService, HelpersService ],
})
export class AppModule {}
