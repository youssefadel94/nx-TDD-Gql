import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rocket as RocketDetailCard } from '@yadel/rockets/detail/data-access';
import { Rocket as RocketListCard } from '@yadel/rockets/list/data-access';

@Component({
  selector: 'yadel-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css',]
})
export class RocketCardComponent {
  @Input() rocketList: RocketListCard = {};
  @Input() rocketDetail: RocketDetailCard | null = {};
  @Output() viewDetails = new EventEmitter<string>();

  /**
   * @description if rocket card list view, emits the id to view details
   * @memberof RocketCardComponent
   */
  openRocketDetail() {
    if (this.rocketList?.id)
      this.viewDetails.emit(this.rocketList.id as string);
  }

  // TODO: fix material design
  // TODO: generate documentation
}
