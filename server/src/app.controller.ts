import { Controller, Get } from '@nestjs/common';
import { AppService, MyString } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MyString {
    return this.appService.getHello();
  }
}
