import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
    
  }

  onAdd(){
    const ingrName = this.inputNameRef.nativeElement.value;
    const ingrAmount = this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredients(ingrName, ingrAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
