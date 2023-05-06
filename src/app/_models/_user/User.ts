import { Account } from "./Account";
import { Roles } from "./Roles";

export class User {
    id!: number;
    username! : string ;
    password! : string ;
    roles! : Roles;
    permissions! : string ;
    isEnabled ! : boolean ; 
    code! : string ;
    account! : Account;
}