import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RocketDetailComponent],
  exports: [RocketDetailComponent],
})
export class RocketDetailFeatureModule {}
