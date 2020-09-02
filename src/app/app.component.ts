import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trav-grid-problem';

  openGithub() {
    window.open("https://github.com/TravBradfield/GridLayout");
  }
}
