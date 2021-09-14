import { NineAndFourThirdComponent } from './nine-and-four-third/nine-and-four-third.component';
import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'naft', component: NineAndFourThirdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
