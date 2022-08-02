import { Component, Host, Inject, OnInit } from '@angular/core';
import { LevelService } from '../level.service';
import { USER } from '../user..token';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
  // providers:[{provide:LevelService,useValue:{providedVia:'Bottom Component'}}]
})
export class BottomComponent implements OnInit {

  constructor(
    @Host() public levelService:LevelService,
    @Inject(USER) public user:string
  ) { }

  ngOnInit(): void {
  }

}
