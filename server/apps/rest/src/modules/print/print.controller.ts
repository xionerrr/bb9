import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { Review } from '@prisma/client'

import { PrintService } from './print.service'

@ApiTags('Print')
@Controller('print')
export class PrintController {
  constructor(private printService: PrintService) {}

  @Post('')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden',
  })
  print(@Body() body: Review) {
    return this.printService.print(body)
  }
}
