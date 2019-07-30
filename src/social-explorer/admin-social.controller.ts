import {Controller, Get, HttpStatus, Response, UseGuards} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('social-explorer')
@Controller('admin/social-explorer')
export class AdminSocialController {

  @Get('defaults')
  async getDefaults(@Response() res: any): Promise<any> {

    return res.status(HttpStatus.OK).json({
      sources: 1,
    });
  }
}
