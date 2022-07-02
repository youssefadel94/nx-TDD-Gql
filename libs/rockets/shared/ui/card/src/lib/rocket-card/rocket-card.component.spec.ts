import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCardComponent } from './rocket-card.component';

describe('RocketCardComponent', () => {
  let component: RocketCardComponent;
  let fixture: ComponentFixture<RocketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
