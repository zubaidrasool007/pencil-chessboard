import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board';
import { fromEvent } from "rxjs"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChild('board', { static: false }) board!: NgxChessBoardView;

  constructor() { }

  ngOnInit(): void {
    fromEvent(window, 'message').subscribe((event: any) => {
      console.log("FEN", event.data)
      this.board.setFEN(event.data)
    })
  }

  ngAfterViewInit(): void {
    const FEN = this.board.getFEN();
    console.log({ FEN })
  }

  onMoveChange({fen}: any) {
    window.postMessage(fen, `${window.location.href}iframe`)
    console.log({ fen })
  }
}
