import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSelectedPage } from './product-selected.page';

describe('ProductSelectedPage', () => {
  let component: ProductSelectedPage;
  let fixture: ComponentFixture<ProductSelectedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
