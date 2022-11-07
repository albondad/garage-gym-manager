import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get()
  findAll(): string {
    return 'hello world';
  }
}
