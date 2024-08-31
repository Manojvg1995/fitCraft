import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCartPage } from './product-cart.page';

describe('ProductCartPage', () => {
  let component: ProductCartPage;
  let fixture: ComponentFixture<ProductCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
