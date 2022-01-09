import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css'],
})
export class GameAreaComponent implements OnInit {
  public route!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${window.location.href}iframe`
    );
  }
}
