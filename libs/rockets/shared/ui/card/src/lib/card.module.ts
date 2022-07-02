import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketCardComponent } from './rocket-card/rocket-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RocketCardComponent
  ],
  exports: [
    RocketCardComponent
  ],
})
export class CardModule {}
