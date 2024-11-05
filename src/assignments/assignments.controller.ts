import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('factorial/:number')
  factorial(@Param('number') number: number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return { factorial: result };
  }
}