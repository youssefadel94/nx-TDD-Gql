


import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RocketsShellModule } from '@yadel/rockets/shell/feature';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent,],
  imports: [RouterModule, RocketsShellModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
