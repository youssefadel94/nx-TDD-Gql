import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '@yadel/rockets/list/data-access';
import { RocketsStore } from '@yadel/rockets/shared/data-access/state';
import { Router } from '@angular/router';
@Component({
  selector: 'yadel-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsListComponent {//implements OnInit {
  rockets$: Observable<Rocket[]>;

  constructor(private state: RocketsStore, private router: Router) {
    this.rockets$ = this.state.rocketList$;
  }

  // ngOnInit(): void { }

  /**
   * @description handle slider value changes
   * @param {number} value
   * @memberof RocketsListComponent
   */
  sliderValueChanged(value: number) {
    // console.log('sliderValueChanged', value);
    this.fetchRockets(value);
  }

  /**
   * @description consumes the rocketsListGQL query and fetches the rockets
   * @param {number} limit
   * @memberof RocketsListComponent
   */
  fetchRockets(limit: number): void {
    this.state.fetchRockets(limit);
  }
  /**
   * @description
   * @param {string} id
   * @memberof RocketsListComponent
   */
  viewRocketDetails(id: string) {
    this.state.fetchRocketDetail(id);
    this.router.navigate(['/rocket']);
  }
}
