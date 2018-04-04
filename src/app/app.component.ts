import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() itemLoaded: string = 'recipe';

  onNavigate(item: string){
    this.itemLoaded = item;
  }
  
}
