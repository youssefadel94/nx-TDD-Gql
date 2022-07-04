import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '@yadel/rockets/shared/ui/card';

const routes: Routes = [
  { path: '', component: RocketDetailComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule
  ],
  declarations: [
    RocketDetailComponent
  ],
  exports: [
    RocketDetailComponent
  ],
})
export class RocketDetailFeatureModule { }
