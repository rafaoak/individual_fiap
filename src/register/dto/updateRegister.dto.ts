
import { PartialType } from "@nestjs/mapped-types";
import { createRegisterDTO } from "./createRegister.dto";

export class updateRegisterDTO extends PartialType (createRegisterDTO){}


