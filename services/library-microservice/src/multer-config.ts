/* eslint-disable prettier/prettier */
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = MulterModule.register({
  storage: diskStorage({
    destination: './images',
    filename: (req, file, callback) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
      return callback(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
});