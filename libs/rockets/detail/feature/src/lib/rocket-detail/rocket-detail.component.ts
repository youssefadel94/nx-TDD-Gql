import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rocket } from '@yadel/rockets/detail/data-access';
import { RocketsStore } from '@yadel/rockets/shared/data-access/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'yadel-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent {
  rocket$: Observable<Rocket>

  constructor(private state: RocketsStore, private router: Router) {
    this.rocket$ = this.state.rocketDetail$;
  }

  /**
   * @description navigate back to home page
   * @memberof RocketDetailComponent
   */
  goBack() {
    this.router.navigate(['/home']);
  }

  // TODO: test back button
}
