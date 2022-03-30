import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';

const components = [
  SidebarComponent,
  MediaPlayerComponent,
  HeaderComponent,
  CardContainerComponent,
  CardPlayerComponent,
];
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SharedModule {}
