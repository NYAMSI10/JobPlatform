import { Module } from '@nestjs/common';
import { AuthuserController } from './authuser.controller';
import { AuthuserService } from './authuser.service';
import {HelpersService} from "../helpers/helpers.service";
import {ConfigService} from "@nestjs/config";
import { JwtModule } from '@nestjs/jwt';
import {jwtConstants} from "../helpers/constant";


@Module({
  imports:[
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1d' },
      })
  ],
  controllers: [AuthuserController],
  providers: [AuthuserService,HelpersService, ConfigService]
})
export class AuthuserModule {}
