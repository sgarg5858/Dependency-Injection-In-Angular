import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionLoggerService implements LoggerService {

  constructor() { }
  logError(error: any): void {
    console.log("Production",error)
  }
}