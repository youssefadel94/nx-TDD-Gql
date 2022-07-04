import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'yadel-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
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
    // create new form group linked to slider
    this.newSliderForm
      .get('slider')?.valueChanges
      .subscribe(
        value => {
          this.onValueChanged(value);
        })
  }

  /**
   * @description emits new slider value on change
   * @param {number} value
   * @memberof SliderComponent
   */
  onValueChanged(value: number): void {
    this.valueChanged.emit(value);
  }
}
