/* eslint-disable prettier/prettier */
// multer-file.interface.ts
export interface MulterFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    filename: string;
    buffer: Buffer;
  }
  