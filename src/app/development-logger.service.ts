import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentLoggerService implements LoggerService {

  constructor() { }
  logError(error: any): void {
    console.log("Development",error)
  }
}
