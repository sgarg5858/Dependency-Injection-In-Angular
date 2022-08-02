import { Injectable, Injector } from '@angular/core';
import { DevelopmentLoggerService } from './development-logger.service';
import { Environment } from './environment.token';
import { ProductionLoggerService } from './production-logger.service';

@Injectable({
  providedIn: 'root',
  useFactory:(injector:Injector)=>{
    let env:Environment=injector.get(Environment);
    console.log(env);
    if(env.production)
    {
      return new ProductionLoggerService();
    }
    else{
      return new DevelopmentLoggerService();
    }
  },deps:[Injector]
})
export class LoggerService {

  constructor() { }
  logError(error:any):void
  {
  }
}
