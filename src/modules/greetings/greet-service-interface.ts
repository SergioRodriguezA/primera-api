import { GreetGroupInDto } from "./dto/greet-group-in-dto.js";
import { GreetGroupOutDto } from "./dto/greet-group-out-dto.js";
import { GreetPersonOutDto } from "./dto/greet-person-out-dto.js";

export interface GreetServiceInterface {
    greetPerson(name:string):GreetPersonOutDto;
    greetGroup(GreetGroupInDto:GreetGroupInDto): GreetGroupOutDto;
}
