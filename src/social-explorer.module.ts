import { Module } from '@nestjs/common';
import { SocialExplorerService } from './social-explorer.service';
import {AdminSocialController} from './admin-social.controller';

@Module({
  providers: [SocialExplorerService],
  exports: [SocialExplorerService],
  controllers: [AdminSocialController],
})
export class SocialExplorerModule {}
