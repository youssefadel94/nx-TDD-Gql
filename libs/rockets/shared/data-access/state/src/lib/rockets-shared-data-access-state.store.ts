import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";

import { Rocket as RocketDetailCard, RocketDetailGQL } from '@yadel/rockets/detail/data-access';
import { Rocket as RocketListCard, RocketsListGQL } from '@yadel/rockets/list/data-access';
import { map, Observable, switchMap } from "rxjs";

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

@Injectable()
export class RocketsStore extends ComponentStore<RocketsState>{
  rocketList$: Observable<RocketListCard[]> =
    this.select(state => state.rocketList);
  rocketDetailId$: Observable<string> =
    this.select(state => state.rocketDetailId);
  rocketDetail$: Observable<RocketDetailCard> =
    this.select(state => state.rocketDetail);
  private updateRocketList = this.updater<RocketListCard[]>(
    (state, rocketList) => ({ ...state, rocketList }));
  private updateRocketDetailId = this.updater<string>(
    (state, rocketDetailId) => ({ ...state, rocketDetailId }));
  private updateRocketDetail = this.updater<RocketDetailCard>(
    (state, rocketDetail) => ({ ...state, rocketDetail }));
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
    // this.setState(initialState);
  }
  fetchRockets(limit: number) {
    this.loadRocketList(limit);
  }
  fetchRocketDetail(id: string) {
    this.loadRocketDetail(id);
  }
}
