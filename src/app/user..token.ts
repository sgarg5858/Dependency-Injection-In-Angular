import { InjectionToken } from "@angular/core";

export const USER = new InjectionToken("",{
    providedIn:'root',
    factory:()=>"Sanjay"
})