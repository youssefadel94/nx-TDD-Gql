import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCardComponent } from './rocket-card.component';

describe('RocketCardComponent', () => {
  let component: RocketCardComponent;
  let fixture: ComponentFixture<RocketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocketCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RocketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if RocketListCard it should emit a string  using viewDetails output when view button is clicked', () => {
    const spy = jest.spyOn(component.viewDetails, 'emit');
    component.rocketList = {
      id: 'falcon9',
    };
    component.viewDetails.emit('test');
    expect(spy).toHaveBeenCalledWith('test');
    component.openRocketDetail();
    expect(spy).toHaveBeenCalledWith('falcon9');

  })

});
