import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss'],
})
export class PopularProductComponent {

  @Input() item: any;
  @Input() selected: boolean = false;
  @Output() selectedValue = new EventEmitter<void>();

  selectCard() {
    this.selectedValue.emit(this.item);
  }
}
