/* eslint-disable prettier/prettier */

export class CreateUserDto {
  readonly fname: string;
  readonly lname: string;
  readonly email: string;
  readonly password: string;
  }
  
export class UpdateUserDto {
  readonly fname?: string;
  readonly lname?: string;
  readonly email?: string;
  readonly password?: string;
  }

