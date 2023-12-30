/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

export interface User extends mongoose.Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
}