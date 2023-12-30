import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { UpdateUserDto } from './dto/signup.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
  @Get('/users')
  findAll() {
    return this.authService.findAll();
  }
  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(id);
  }
  @Put('users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(id, updateUserDto);
  }
  @Delete('users/:id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
}
