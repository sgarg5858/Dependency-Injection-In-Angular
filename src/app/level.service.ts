import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  providedVia:string="Root Scope";
  constructor() { }
}
