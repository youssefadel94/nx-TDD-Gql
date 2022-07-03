import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rocket as RocketDetailCard } from '@yadel/rockets/detail/data-access';
import { Rocket as RocketListCard } from '@yadel/rockets/list/data-access';

@Component({
  selector: 'yadel-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css',]
})
export class RocketCardComponent {//} implements OnInit {
  @Input() rocketList: RocketListCard = {};
  @Input() rocketDetail: RocketDetailCard | null = {};
  @Output() viewDetails = new EventEmitter<string>();

  // constructor() { }

  // ngOnInit(): void { }

  openRocketDetail() {
    if (this.rocketList?.id)
      this.viewDetails.emit(this.rocketList.id as string);
  }
  //TODO fix material design
  //TODO generate documentation
}
