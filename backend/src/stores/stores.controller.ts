import { Controller, Get } from '@nestjs/common';

@Controller('stores')
export class StoresController {

  @Get()
  getHello(): string {
    return 'asdsads'
  }
}
