import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LevelService } from './level.service';
import { LoggerService } from './logger.service';
import { USER } from './user..token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    {provide:LevelService,useValue:{providedVia:'App Component'}},
    {
      provide:USER,useValue:"Sanju"
    },
    {
      provide:'env',useValue:environment
    }
  ]
})
export class AppComponent {
  title = 'dependency-injection-in-angular';
  constructor(private loggerService:LoggerService){
    console.log(this.loggerService.logError("BAM"))
  }
}
