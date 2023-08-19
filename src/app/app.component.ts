import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertisseur-devises';

  selectedTab: string = 'Convertisseur';

  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
