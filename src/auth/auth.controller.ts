import { Controller, Post, Req } from '@nestjs/common';
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
  signin(@Req() dto: AuthDto) {
    console.log({
        dto
    });
    return this.authService.signup();
  }

  @Post('signup')
  signup() {
    return this.authService.signin();
  }

}
