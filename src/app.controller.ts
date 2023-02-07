import { Controller, Get } from '@nestjs/common';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @SkipThrottle()
  @Get()
  getUsers(): string[] {
    return [];
  }

  @Throttle(5, 15)
  @Get()
  getUserPosts(): string[] {
    return [];
  }
}
