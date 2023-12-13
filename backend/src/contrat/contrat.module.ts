import { Module } from '@nestjs/common';
import { ContratService } from './contrat.service';
import { ContratController } from './contrat.controller';
import {HelpersService} from "../helpers/helpers.service";
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";
import {RoleGuard} from "../role/role.guard";

@Module({
  controllers: [ContratController],
  providers: [ContratService,HelpersService,UserService,RoleGuard],
})
export class ContratModule {}
