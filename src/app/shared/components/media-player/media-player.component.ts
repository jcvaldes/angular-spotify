import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover = {
    cover:
      'https://media.resources.festicket.com/image/300x300/center/top/filters:quality(70)/www/artists/4.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
  };
  constructor() {}

  ngOnInit(): void {}
}
