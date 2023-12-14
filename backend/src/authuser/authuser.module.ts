import { Module } from '@nestjs/common';
import { AuthuserController } from './authuser.controller';
import { AuthuserService } from './authuser.service';
import {HelpersService} from "../helpers/helpers.service";
import {ConfigService} from "@nestjs/config";
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from "../helpers/constant";
import {AuthuserGuard} from "./authuser.guard";
import {APP_GUARD} from "@nestjs/core";

@Module({
  imports:[
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1d' },
      })
  ],
  controllers: [AuthuserController],
  providers: [AuthuserService,HelpersService, ConfigService,AuthuserGuard]
})
export class AuthuserModule {}
