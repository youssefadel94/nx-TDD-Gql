import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsListComponent } from './rockets-list/rockets-list.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [CommonModule, MatSliderModule],
  declarations: [RocketsListComponent],
})
export class RocketsListFeatureModule {}
