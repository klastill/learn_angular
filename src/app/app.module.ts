import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByeComponent } from './bye/bye.component';
import { HelloChildComponent } from './hello-child/hello-child.component';
import { NineAndFourThirdComponent } from './nine-and-four-third/nine-and-four-third.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByeComponent,
    HelloChildComponent,
    NineAndFourThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
