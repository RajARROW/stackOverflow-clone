import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collapseShow = 'hidden';
  faBar = faBars;
  title = 'stackOverflow';

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
