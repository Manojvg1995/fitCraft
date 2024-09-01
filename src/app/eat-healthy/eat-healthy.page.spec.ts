import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EatHealthyPage } from './eat-healthy.page';

describe('EatHealthyPage', () => {
  let component: EatHealthyPage;
  let fixture: ComponentFixture<EatHealthyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EatHealthyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
