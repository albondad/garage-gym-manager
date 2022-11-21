import { Controller, Post, Body } from '@nestjs/common';
import { DevelopmentService } from './development.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('development')
export class DevelopmentController {
  constructor(private readonly developmentService: DevelopmentService) {}

  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.developmentService.signIn(signInDto);
  }
}
