import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsListComponent } from './rockets-list/rockets-list.component';
import { SliderModule } from '@yadel/rockets/list/ui/slider';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RocketsListComponent },
];
@NgModule({
  imports: [CommonModule, SliderModule, RouterModule.forChild(routes)],
  declarations: [RocketsListComponent],
  exports: [RocketsListComponent],
  // bootstrap: [RocketsListComponent]
})
export class RocketsListFeatureModule {}
