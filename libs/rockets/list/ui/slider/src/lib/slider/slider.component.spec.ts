import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valueChanged EventEmitter should emit value of FormGroup newSliderForm control slider on slider valueChange', () => {
    const spy = jest.spyOn(component.valueChanged, 'emit');
    component.newSliderForm.get('slider')?.setValue(5);
    expect(spy).toHaveBeenCalledWith(5);
  })

});
