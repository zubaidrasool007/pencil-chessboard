import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board';
import { fromEvent } from "rxjs"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChild('board', { static: false }) board!: NgxChessBoardView;
  @ViewChild('container', { static: false }) container!: ElementRef;

  communicator = new BroadcastChannel('communicator');

  constructor() { }

  ngOnInit(): void {

    // fromEvent(window, 'message').subscribe((event: any) => {
    //   console.log("FEN", event)
    //   // this.board.setFEN(event.data)
    //   // this.board.move(event.data)
    // })

  }

  ngAfterViewInit(): void {
  }

  onMoveChange(event: any) {
    this.communicator.postMessage(event.fen)
    // window.postMessage(event.fen, `${window.location.href}iframe`)
    // console.log({ fen: event, url: window.location.href })
  }
}
