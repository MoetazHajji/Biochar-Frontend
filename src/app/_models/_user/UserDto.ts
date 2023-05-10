import { Account } from "./Account";
import { Roles } from "./Roles";

export class UserDto {
    id!: number;
    username! : string ;
    password! : string ;
    roles! : Roles;
    listPermissions! : string[];
    enabled : boolean = false; 
    code! : string ;
} 