import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TestingLoggerService implements LoggerService {

  constructor() { }
  logError(error: any): void {
    console.log("Testing",error)
  }
}