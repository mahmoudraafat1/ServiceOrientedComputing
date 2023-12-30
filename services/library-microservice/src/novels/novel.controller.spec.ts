import { Test, TestingModule } from '@nestjs/testing';
import { NovelController } from './novel.controller';

describe('NovelModule', () => {
  let controller: NovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovelController],
    }).compile();

    controller = module.get<NovelController>(NovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
