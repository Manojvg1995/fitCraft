import { Component , Input , OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerName!: string;
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  private updateTitle() {
    console.log(this.router.url)
    const currentUrl = this.router.url;
    switch (currentUrl) {
      case '/home':
        this.headerName = 'Home Page';
        break;
      case '/pages/feed':
        this.headerName = 'Feed';
        break;
      case '/pages/home':
          this.headerName = 'Craft';
          break;
      case '/pages/profile':
          this.headerName = 'Profile';
          break;
      case '/pages/book-product':
          this.headerName = 'Details';
          break;
      case '/pages/product-cart':
            this.headerName = 'Cart';
            break;
      case '/pages/product-listing':
        this.headerName = 'Market Place';
        break;
      default:
        this.headerName = 'Default Title';
    }
  }

  backToHome(){
    this.router.navigate(['/pages/home']);
  }
}
