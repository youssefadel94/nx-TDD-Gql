/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RocketDetailComponent } from './rocket-detail.component';
import { Router } from '@angular/router';
import { RocketsStore } from '@yadel/rockets/shared/data-access/state';

describe('RocketDetailComponent', () => {
  let component: RocketDetailComponent;
  let fixture: ComponentFixture<RocketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketDetailComponent],
      providers: [{ provide: RocketsStore, useValue: {} }, {
        provide: Router, useValue: {

          navigate: ([route]: string) => {
            return route;
          }
        }
      },]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate', () => {
    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate');
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

});
