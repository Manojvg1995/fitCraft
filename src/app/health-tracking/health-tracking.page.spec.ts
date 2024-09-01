import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthTrackingPage } from './health-tracking.page';

describe('HealthTrackingPage', () => {
  let component: HealthTrackingPage;
  let fixture: ComponentFixture<HealthTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
