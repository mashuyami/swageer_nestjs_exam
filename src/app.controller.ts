import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { AdminInput } from './dto/admin-input';
@ApiTags('Test swagger')
@Controller('Test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getApi')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/postApi')
  postHello(@Body() req: AdminInput) {
    return { success: req };
  }
}
