import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<any> = [];
  constructor() {}

  ngOnInit(): void {
    debugger;
    console.log(this.dataTracks);
  }
}
