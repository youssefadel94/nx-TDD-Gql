import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'yadel-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SliderComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<number>();

  newSliderForm: FormGroup;
  constructor() {
    this.newSliderForm = new FormBuilder().group({
      slider: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    this.newSliderForm
      .get('slider')?.valueChanges
      .subscribe(
        value => {
          this.onValueChanged(value);
        })
  }

  onValueChanged(value: number): void {
    this.valueChanged.emit(value);
  }
}
