import { AuthenticationStatus } from "./AuthenticationStatus";
export class AuthenticationResponse { 
    token! : string ;
    status! : AuthenticationStatus ; 
    message! : string ; 
}