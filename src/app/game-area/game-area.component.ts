import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css'],
})
export class GameAreaComponent implements OnInit, AfterViewInit {
  public route!: SafeResourceUrl;
  communicator = new BroadcastChannel('communicator');

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${window.location.href}iframe`
    );
    console.log("ROUTE", this.route);
    this.communicator.onmessage = (event) => {
      console.log("MESSAGE", event);
      // this.board.setFEN(event.data)
    }
  }
  
  ngAfterViewInit(): void {
  }
  
  testing() {
    // (document.getElementById('frame1') as HTMLIFrameElement)!.contentWindow!.postMessage('event.fen', `${window.location.href}iframe`);
    // (document.getElementById('frame2') as HTMLIFrameElement)!.contentWindow!.postMessage('event.fen', `${window.location.href}iframe`);
  }
}
