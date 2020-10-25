import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<any>();
  isClose = true;
  bars = faBars;
  close = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  menuClicked() {
    this.isClose = !this.isClose;
    this.menuToggle.emit({});
  }

}
