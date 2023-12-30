import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NovelController } from './novel.controller';
import { NovelService } from './novel.service';
import { NovelSchema } from './novel.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Novel', schema: NovelSchema }]),
  ],
  controllers: [NovelController],
  providers: [NovelService],
})
export class NovelModule {}
