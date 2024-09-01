import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapingBodyDetailsPage } from './shaping-body-details.page';

describe('ShapingBodyDetailsPage', () => {
  let component: ShapingBodyDetailsPage;
  let fixture: ComponentFixture<ShapingBodyDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapingBodyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
