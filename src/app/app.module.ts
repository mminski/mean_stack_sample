import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BgbService } from './services/bgb.service';
import { AppComponent } from './app.component';
import { BgbComponent } from './components/bgb/bgb.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BgbComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
	BgbService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
