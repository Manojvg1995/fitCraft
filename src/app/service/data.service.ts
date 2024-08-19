import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tabsVisible = new BehaviorSubject<boolean>(true);
  tabsVisible$ = this.tabsVisible.asObservable();

  private navigateToProductSelectedSource = new Subject<void>();
  navigateToProductSelected$ = this.navigateToProductSelectedSource.asObservable();

  notifyProductSelectedNavigation() {
    this.navigateToProductSelectedSource.next();
  }

  showTabs() {
    this.tabsVisible.next(true);
  }

  hideTabs() {
    this.tabsVisible.next(false);
  }
  
}
