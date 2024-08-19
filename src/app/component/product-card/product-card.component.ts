import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() item: any;
  @Input() selected: boolean = false;
  @Output() selectedValue = new EventEmitter<void>();

  selectCard() {
    this.selectedValue.emit(this.item);
  }

}
