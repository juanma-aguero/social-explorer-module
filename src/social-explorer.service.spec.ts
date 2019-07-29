import { Test, TestingModule } from '@nestjs/testing';
import { SocialExplorerService } from './social-explorer.service';

describe('SocialExplorerService', () => {
  let service: SocialExplorerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialExplorerService],
    }).compile();

    service = module.get<SocialExplorerService>(SocialExplorerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
