import { Component } from '@angular/core';
import { LevelService } from './level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{provide:LevelService,useValue:{providedVia:'App Component'}}]
})
export class AppComponent {
  title = 'dependency-injection-in-angular';
}
