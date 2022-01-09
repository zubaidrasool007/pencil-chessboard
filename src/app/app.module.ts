import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GameAreaComponent } from './game-area/game-area.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, GameAreaComponent],
  imports: [BrowserModule, NgxChessBoardModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
