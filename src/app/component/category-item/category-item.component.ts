import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent{

  @Input() item!: Category;

  @Output() selectedCategoryEvent = new EventEmitter<Category>();

  selectedCategoryItem(item: Category) {
    this.selectedCategoryEvent.emit(item);
  }
}
