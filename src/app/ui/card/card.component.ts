import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Output() addProduct = new EventEmitter();

  getProduct(title: string) {
    console.log(title);
    this.addProduct.emit(title);
  }

}
