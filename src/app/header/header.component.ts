import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
   @Output() itemClicked = new EventEmitter<string>();

    onRecipesClicked(feature: string){
        this.itemClicked.emit(feature);
    }
    onShoppingClicked(feature: string){
        this.itemClicked.emit(feature);
    }
}