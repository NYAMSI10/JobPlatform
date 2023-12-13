import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {HelpersService} from "../helpers/helpers.service";
import {RoleGuard} from "../role/role.guard";

@Module({
  controllers: [UserController],
  providers: [UserService,HelpersService,RoleGuard],
})
export class UserModule {}
