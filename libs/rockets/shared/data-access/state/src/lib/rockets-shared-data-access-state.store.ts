import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";

import { Rocket as RocketDetailCard, RocketDetailGQL } from '@yadel/rockets/detail/data-access';
import { Rocket as RocketListCard, RocketsListGQL } from '@yadel/rockets/list/data-access';
import { map, Observable, switchMap } from "rxjs";

/**
 * @description state interface
 * @export
 * @interface RocketsState
 */
export interface RocketsState {
  readonly rocketList: RocketListCard[];
  readonly rocketDetailId: string;
  readonly rocketDetail: RocketDetailCard;
}


const initialState = {
  rocketList: [],
  rocketDetailId: '',
  rocketDetail: {}
}

@Injectable(
  { providedIn: 'root' }
)
export class RocketsStore extends ComponentStore<RocketsState>{

  /**
   * @description rocket list observable using NGRX selector
   * @type {Observable<RocketListCard[]>}
   * @memberof RocketsStore
   */
  rocketList$: Observable<RocketListCard[]> =
    this.select(state => state.rocketList);

  /**
   * @description an observable for selected rocket to view using NGRX selector
   * @type {Observable<string>}
   * @memberof RocketsStore
   */
  rocketDetailId$: Observable<string> =
    this.select(state => state.rocketDetailId);

  /**
   * @description an observable for selected rocket to view using NGRX selector
   * @type {Observable<RocketDetailCard>}
   * @memberof RocketsStore
   */
  rocketDetail$: Observable<RocketDetailCard> =
    this.select(state => state.rocketDetail);


  /**
   * @description private NGRX update function to update state with new rocket list
   * @private
   * @memberof RocketsStore
   */
  private updateRocketList = this.updater<RocketListCard[]>(
    (state, rocketList) => ({ ...state, rocketList }));

  /**
   * @description private NGRX update function to update state with new rocket detail
   * @private
   * @memberof RocketsStore
   */
  private updateRocketDetailId = this.updater<string>(
    (state, rocketDetailId) => ({ ...state, rocketDetailId }));

  /**
   * @description private NGRX update function to update state with new rocket detail
   * @private
   * @memberof RocketsStore
   */
  private updateRocketDetail = this.updater<RocketDetailCard>(
    (state, rocketDetail) => ({ ...state, rocketDetail }));

  /**
   * @description load rocket list from API
   * @private
   * @memberof RocketsStore
   */
  private loadRocketList = this.effect<number>(
    limit$ => limit$.pipe(
      switchMap(
        limit => this.rocketsListGQL.fetch({ limit }).pipe(
          tapResponse(
            result => this.updateRocketList(result.data.rockets as RocketListCard[]),
            error => this.updateRocketList([]))
        )
      )
    )
  );

  /**
   * @description load rocket detail from API
   * @private
   * @memberof RocketsStore
   */
  private loadRocketDetail = this.effect<string>(
    id$ => id$.pipe(
      switchMap(
        id => this.RocketDetailGQL.fetch({ id }).pipe(
          tapResponse(
            result => { this.updateRocketDetail(result.data.rocket as RocketDetailCard); this.updateRocketDetailId(id); },
            error => this.updateRocketDetail({}))
        )
      )
    )
  );

  constructor(private rocketsListGQL: RocketsListGQL, private RocketDetailGQL: RocketDetailGQL) {
    super(initialState);
    this.loadRocketList(0);
  }

  /**
   * @description fetch rockets from api and load in state
   * @param {number} limit
   * @memberof RocketsStore
   */
  fetchRockets(limit: number) {
    this.loadRocketList(limit);
  }

  /**
   * @description fetch rocket detail from api and load in state
   * @param {string} id
   * @memberof RocketsStore
   */
  fetchRocketDetail(id: string) {
    this.loadRocketDetail(id);
  }

}
