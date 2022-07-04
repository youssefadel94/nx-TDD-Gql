import { RocketsStore } from './rockets-shared-data-access-state.store';
import { TestBed } from '@angular/core/testing';
import { RocketDetailGQL } from '@yadel/rockets/detail/data-access';
import { RocketsListGQL } from '@yadel/rockets/list/data-access';
import {
  ApolloTestingModule
} from 'apollo-angular/testing';
import { of, zip } from 'rxjs';


describe(RocketsStore.name, () => {
  // uncomment if apollo test controller is to be used to test gql queries
  // let controller: ApolloTestingController;
  // controller = TestBed.inject(ApolloTestingController);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        RocketsStore,

        {
          provide: RocketsListGQL, useValue: {
            fetch:
              () => {
                return of({ data: { rockets: [{ id: '1', name: '1' }] } });
              },
          }
        },
        {
          provide: RocketDetailGQL, useValue: {
            fetch:
              () => {
                return of({ data: { rocket: { id: '1', name: '1' } } });
              },
          }
        },
      ],
    });
  })

  function setup() {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        RocketsStore,

        {
          provide: RocketsListGQL, useValue: {
            fetch:
              () => {
                return of({ data: { rockets: [{ id: '1', name: '1' }] } });
              },
          }
        },
        {
          provide: RocketDetailGQL, useValue: {
            fetch:
              () => {
                return of({ data: { rocket: { id: '1', name: '1' } } });
              },
          }
        },
      ],
    });

    const store = TestBed.inject(RocketsStore);
    return { store };
  }

  it('is provided externally', () => {
    const { store } = setup();
    expect(store).toBeDefined();
    expect(store).not.toBeNull();
  })

  it('should be defined', () => {
    const store = TestBed.inject(RocketsStore);
    expect(store).toBeDefined();
  });

  describe('rocketList$', () => {
    it('emits a list', async () => {
      const { store } = setup();
      const rocketList = [{ id: '1' }, { id: '2' }];
      store.setState({ rocketList, rocketDetailId: '', rocketDetail: {} });
      store.rocketList$.subscribe(list => {
        expect(list).toEqual(rocketList);
      });
    })
  })

  describe('rocketDetailId$', () => {
    it('emits a rocketDetailId', async () => {
      const { store } = setup();
      const rocketDetailId = '1';
      store.setState({ rocketList: [], rocketDetailId, rocketDetail: {} });
      store.rocketDetailId$.subscribe(id => {
        expect(id).toEqual(rocketDetailId);
      });
    })
  })

  describe('rocketDetail$', () => {
    it('emits a rocketDetail', async () => {
      const { store } = setup();
      const rocketDetail = { id: '1' };
      store.setState({ rocketList: [], rocketDetailId: '', rocketDetail });
      store.rocketDetail$.subscribe(detail => {
        expect(detail).toEqual(rocketDetail);
      });
    }
    )
  })

  describe('setState', () => {
    it('sets the state', async () => {
      const { store } = setup();
      const rocketList = [{ id: '1' }, { id: '2' }];
      const rocketDetailId = '1';
      const rocketDetail = { id: '1' };
      store.setState({ rocketList, rocketDetailId, rocketDetail });
      zip(store.rocketList$, store.rocketDetailId$, store.rocketDetail$).subscribe(([_rocketList, _rocketDetailId, _rocketDetail]) => {
        expect(_rocketList).toEqual(rocketList);
        expect(_rocketDetailId).toEqual(rocketDetailId);
        expect(_rocketDetail).toEqual(rocketDetail);
      })
    }
    )
  })

  describe('updateState', () => {
    it('updates the rocketList', async () => {
      const { store } = setup();
      const rocketList = [{ id: '1' }, { id: '2' }];
      store['updateRocketList'](rocketList);
      store.rocketList$.subscribe(list => {
        expect(list).toEqual(rocketList);
      });
    }
    )

    it('updates the rocketDetailId', async () => {
      const { store } = setup();
      const rocketDetailId = '1';
      store['updateRocketDetailId'](rocketDetailId);
      store.rocketDetailId$.subscribe(id => {
        expect(id).toEqual(rocketDetailId);
      });
    }
    )

    it('updates the rocketDetail', async () => {
      const { store } = setup();
      const rocketDetail = { id: '1' };
      store['updateRocketDetail'](rocketDetail);
      store.rocketDetail$.subscribe(detail => {
        expect(detail).toEqual(rocketDetail);
      });
    }
    )

  })

  describe('LoadRocketListAndDetail', () => {
    it('loadRocketList', () => {
      const { store } = setup();
      const rocketListGQL = TestBed.inject(RocketsListGQL);
      const rocketListGQLSpy = jest.spyOn(rocketListGQL, 'fetch')
      store['loadRocketList'](2);
      expect(rocketListGQLSpy).toHaveBeenCalled();
    })

    it('loadRocketDetail', () => {
      const { store } = setup();
      const rocketDetailId = '1';
      const rocketDetailGQL = TestBed.inject(RocketDetailGQL);
      const rocketDetailGQLSpy = jest.spyOn(rocketDetailGQL, 'fetch')
      store['loadRocketDetail'](rocketDetailId);
      expect(rocketDetailGQLSpy).toHaveBeenCalled();
    })
  })

  describe('LoadRocketList', () => {

    it('loads the rocketList', async () => {
      const { store } = setup();
      const rocketList = [{ id: '1' }];
      // uncomment to test gql using apollos test controller needs more implantation in the mock providers
      // const query = gql`query Rockets { rockets { id } }`;
      // const queryResult = { rockets: rocketList };
      // controller.expectOne(queryResult)
      store.fetchRockets(2);
      store.rocketList$.subscribe(list => {
        expect(list).toEqual(rocketList);
      }
      )
    })

    it('loads the rocketDetail', async () => {
      const { store } = setup();
      const rocketDetail = { id: '1' };
      // uncomment to test gql using apollos test controller needs more implantation in the mock providers
      // const query = gql`query Rockets { rockets { id } }`;
      // const queryResult = { rockets: rocketList };
      // controller.expectOne(queryResult)
      store.fetchRocketDetail('1');
      store.rocketDetail$.subscribe(detail => {
        expect(detail).toEqual(rocketDetail);
      }
      )
    })
  })

})
