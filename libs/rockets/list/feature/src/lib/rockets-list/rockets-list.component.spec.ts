import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketsListGQL } from '@yadel/rockets/list/data-access';

import { RocketsListComponent } from './rockets-list.component';

describe('RocketsListComponent', () => {
  let component: RocketsListComponent;
  let fixture: ComponentFixture<RocketsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocketsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
