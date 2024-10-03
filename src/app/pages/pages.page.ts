import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage {
  showTabs = true;

  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('book-product') || event.url.includes('product-cart')) {
          this.showTabs = false;
        } else {
          this.showTabs = true;
        }
        console.log(this.showTabs);
      }
    });

    this.dataService.tabsVisible$.subscribe(visible => {
      this.showTabs = visible;
    });
  }

  moveToStore(){
   // this.router.navigate(['/pages/product-listing']);
  }
}
