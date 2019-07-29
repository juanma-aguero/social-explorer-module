import { Module } from '@nestjs/common';
import { SocialExplorerService } from './social-explorer.service';

@Module({
  providers: [SocialExplorerService],
  exports: [SocialExplorerService],
})
export class SocialExplorerModule {}
