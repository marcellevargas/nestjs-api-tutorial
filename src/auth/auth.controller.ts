import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('siging')
  //   first option
  //   signin(@Req() req: Request) {
  //     // console.log(req.body);
  //     return this.authService.signup(req.body);
  //   }
  signin(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.authService.signin(dto);
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }
}
