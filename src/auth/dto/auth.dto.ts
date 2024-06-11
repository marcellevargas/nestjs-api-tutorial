import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
   //add decorators to validate if this field is an email and it's not empty
   @IsEmail()
   @IsNotEmpty()
   email: string;

   //add decorators to validate if this field is an string and it's not empty
   @IsString()
   @IsNotEmpty()
   password: string;
}