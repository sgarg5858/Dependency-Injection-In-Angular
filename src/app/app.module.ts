import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MidComponent } from './mid/mid.component';
import { BottomComponent } from './bottom/bottom.component';
import { Environment } from './environment.token';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MidComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:Environment,useValue:environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
