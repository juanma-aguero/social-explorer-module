import {Controller, Get, HttpStatus, Response, UseGuards} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {SocialExplorerService} from "./social-explorer.service";

@ApiUseTags('social-explorer')
@Controller('admin/social-explorer')
export class AdminSocialController {
  constructor(private socialExp: SocialExplorerService) {
  }

  @Get('defaults')
  async getDefaults(@Response() res: any): Promise<any> {

    return res.status(HttpStatus.OK).json({
      sources: 1,
    });
  }

  @Get('twitter')
  async getTwitter(@Response() res: any): Promise<any> {

    await this.socialExp.getPublications();

    return res.status(HttpStatus.OK).json({
      'message': 'ok',
    });
  }
}
