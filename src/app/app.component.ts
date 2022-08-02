import { Component } from '@angular/core';
import { LevelService } from './level.service';
import { USER } from './user..token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    {provide:LevelService,useValue:{providedVia:'App Component'}},
    {
      provide:USER,useValue:"Sanju"
    }
  ]
})
export class AppComponent {
  title = 'dependency-injection-in-angular';
}
