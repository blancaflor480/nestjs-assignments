import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  
  @Get('prime/:number')
  isPrime(@Param('number') number: number) {
    if (number < 2) return { isPrime: false };
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return { isPrime: false };
    }
    return { isPrime: true };
  }
}
