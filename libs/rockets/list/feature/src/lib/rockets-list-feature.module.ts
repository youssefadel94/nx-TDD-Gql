import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsListComponent } from './rockets-list/rockets-list.component';
import { SliderModule } from '@yadel/rockets/list/ui/slider';

@NgModule({
  imports: [CommonModule, SliderModule],
  declarations: [RocketsListComponent],
  exports: [RocketsListComponent],
})
export class RocketsListFeatureModule {}
