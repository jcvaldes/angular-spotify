import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover:
      'https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/4.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    _id: 1,
  };
  constructor() {}

  ngOnInit(): void {}
}
