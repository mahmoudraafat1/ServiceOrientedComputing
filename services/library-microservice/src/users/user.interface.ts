/* eslint-disable prettier/prettier */

import { Document } from 'mongoose';

export interface User extends Document {

  fname: string;
  lname: string;
  email: string;
  password: string;

}
