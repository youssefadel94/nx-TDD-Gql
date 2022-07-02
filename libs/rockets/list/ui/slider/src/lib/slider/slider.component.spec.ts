import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should render an input of type slider', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('input[type="range"]')).toBeTruthy();
  // })
  it('valueChanged EventEmitter should emit value of FormGroup newSliderForm control slider on slider valueChange', () => {
    //use spy
    const spy = jest.spyOn(component.valueChanged, 'emit');

    //use formGroup
    component.newSliderForm.get('slider')?.setValue(5);
    expect(spy).toHaveBeenCalledWith(5);


    // const slider = component.newSliderForm.get('slider');
    // slider?.setValue(5);
    // expect(component.valueChanged.emit).toHaveBeenCalledWith(5);


 })
});
