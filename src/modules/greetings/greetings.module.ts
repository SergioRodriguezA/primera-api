import { Module } from '@nestjs/common';
import { GreetServiceService } from './greet-service.service.js';
import { GreetingsController} from './greetings.controller.js';
import {GREET_SERVICE} from './tokens.js'


@Module({
  controllers:[GreetingsController],
  providers: [
    {
        provide: GREET_SERVICE,
        useClass: GreetServiceService   
    }
  ]
})
export class GreetingsModule {}
