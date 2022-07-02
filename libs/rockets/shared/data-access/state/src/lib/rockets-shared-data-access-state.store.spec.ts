import { RocketsStore } from './rockets-shared-data-access-state.store';
import { TestBed } from '@angular/core/testing';
import { Rocket as RocketDetailCard, RocketDetailGQL } from '@yadel/rockets/detail/data-access';
import { Rocket as RocketListCard, RocketsListGQL } from '@yadel/rockets/list/data-access';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';


describe(RocketsStore.name, () => {

  let controller: ApolloTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        RocketsStore,

        { provide: RocketsListGQL, useValue: {} },
        { provide: RocketDetailGQL, useValue: {} },
      ],
    });
  })
  function setup() {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        RocketsStore,
        { provide: RocketsListGQL, useValue: {} },
        { provide: RocketDetailGQL, useValue: {} },
      ]
    });

    controller = TestBed.inject(ApolloTestingController);
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

})
