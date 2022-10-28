import { IsNotEmpty, IsEmail, IsNumberString, IsString, MaxLength, MinLength } from "class-validator";

export class createRegisterDTO

{

   @IsNotEmpty()
   @IsString()  
   name:string;

   

   @IsNotEmpty()
   @IsEmail()  
   email:string;

   

   @IsNotEmpty()
   @MinLength(6)
   @MaxLength(20) 
   password:string;



   @IsNotEmpty()
   @IsString()
   site:string;



   @IsNotEmpty()
   @IsNumberString()
   phone?:number;

}