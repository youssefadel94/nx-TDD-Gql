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
export class RocketDetailComponent {// implements OnInit {
  rocket$: Observable<Rocket>
  constructor(private state: RocketsStore, private router: Router) {
    this.rocket$ = this.state.rocketDetail$;
  }
  goBack() {
    this.router.navigate(['/home']);
  }
  // ngOnInit() {
  // }
  //TODO test back button
}
