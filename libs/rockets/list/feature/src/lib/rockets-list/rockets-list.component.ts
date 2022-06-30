import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'yadel-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
