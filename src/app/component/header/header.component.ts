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
  backFlag :boolean = true;
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  private updateTitle() {
    this.backFlag = true;
    console.log(this.router.url)
    const currentUrl = this.router.url;
    switch (currentUrl) {
      case '/home':
        this.headerName = 'Home Page';
        this.backFlag = false;
        break;
      case '/pages/feed':
        this.backFlag = false;
        this.headerName = 'FitCraft';
        break;
      case '/pages/home':
          this.backFlag = false;
          this.headerName = 'Craft';
          break;
      case '/pages/profile':
          this.backFlag = false;
          this.headerName = 'Profile';
          break;
      case '/pages/book-product':
          this.headerName = 'Details';
          break;
      case '/pages/product-cart':
            this.headerName = 'Cart';
            break;
      case '/pages/product-listing':
        this.headerName = "Explore NFT's";
        break;
      default:
        this.headerName = 'Default Title';
    }
  }

  backToHome(){
    this.router.navigate(['/pages/home']);
  }
}
