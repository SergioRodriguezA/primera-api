import { Controller,Get,Inject, Param, Query,Post, Body } from '@nestjs/common';
import type { GreetServiceInterface } from './greet-service-interface.js';
import { GREET_SERVICE } from './tokens.js';
import { GreetGroupInDto } from './dto/greet-group-in-dto.js';


@Controller('greetings')
export class GreetingsController {
    constructor(
        @Inject(GREET_SERVICE)
        private readonly greetService: GreetServiceInterface
    ){}

    @Get('')
    greetByName(@Query('name') name: string){
        return this.greetService.greetPerson(name);
    }
    @Get(':name')
    greetByNameV2(@Param('name') name: string){
        return this.greetService.greetPerson(name);
    }

    @Post('')
    greeGroup(@Body() dto: GreetGroupInDto){
        return this.greetService.greetGroup(dto);
    }
}