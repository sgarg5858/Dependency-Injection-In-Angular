import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  providers:[{provide:LevelService,useValue:{providedVia:'Top Component'}}]
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
