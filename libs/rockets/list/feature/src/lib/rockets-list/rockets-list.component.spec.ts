import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketsStore } from '@yadel/rockets/shared/data-access/state';
import { Router } from '@angular/router';

import { RocketsListComponent } from './rockets-list.component';

describe('RocketsListComponent', () => {
  let component: RocketsListComponent;
  let fixture: ComponentFixture<RocketsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocketsListComponent],
      providers: [{
        provide: RocketsStore, useValue: {
          fetchRocketDetail: (id: string) => {
            return id
          },
          fetchRockets: (limit: number) => {
            return limit
          }
        }
      }, {
        provide: Router, useValue: {
          navigate: ([route]: string[]) => {
            return route
          }
        }
      },]
    }).compileComponents();

    fixture = TestBed.createComponent(RocketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('sliderValueChanged should call fetchRockets which in turn should call RocketsStore.fetchRockets', () => {
    const spy = jest.spyOn(component, 'fetchRockets');
    const spy2 = jest.spyOn(component['state'], 'fetchRockets')
    component.sliderValueChanged(1);
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith(1);
  })

  it('viewRocketDetails should call RocketsStore.fetchRocketDetail and router.navigate', () => {
    const spy = jest.spyOn(component, 'viewRocketDetails');
    const spy2 = jest.spyOn(component['router'], 'navigate');
    const spy3 = jest.spyOn(component['state'], 'fetchRocketDetail')
    component.viewRocketDetails('1');
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith(['/rocket']);
    expect(spy3).toHaveBeenCalledWith('1');

  })
});
