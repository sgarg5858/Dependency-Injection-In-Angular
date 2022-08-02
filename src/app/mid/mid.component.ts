import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss'],
  // providers:[{provide:LevelService,useValue:{providedVia:'Mid Component'}}]
})
export class MidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
