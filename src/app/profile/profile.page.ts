import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { navAnimation } from '../animation/navAnimation';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  stepsChart!: Chart;
  caloriesChart!: Chart;

  ngOnInit() {
    this.createDonutCharts();
  }

  createDonutCharts() {
    const drawNeedle = (chart: Chart, percentage: number, color: string) => {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      const radius = (chart as any).innerRadius || 100; // Type safety workaround if innerRadius is not directly available

      const angle = (percentage * 2 * Math.PI) - (Math.PI / 2); // Adjust angle for needle position

      ctx.save();
      ctx.translate(width / 2, height / 2); // Move to center
      ctx.rotate(angle); // Rotate to the correct position

      // Needle properties
      ctx.beginPath();
      ctx.moveTo(0, -5); // Starting point of the needle
      ctx.lineTo(radius, 0); // Draw needle to the outer radius
      ctx.lineWidth = 3; // Needle thickness
      ctx.strokeStyle = color; // Needle color
      ctx.stroke();

      ctx.restore();
    };

    const needlePlugin = {
      id: 'needle',
      afterDraw: (chart: Chart) => {
        // 0.625 points to the "Better" section on the chart
        drawNeedle(chart, 0.625, '#FF0000'); // Set the needle position based on percentage
      },
    };

    // Steps Donut Chart with needle
    this.stepsChart = new Chart('stepsCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Bad', 'Good', 'Better', 'Best'],
        datasets: [
          {
            label: 'Steps',
            data: [1000, 800, 600, 600], // Distribution for Bad, Good, Better, Best
            backgroundColor: ['#FF6347', '#FFD700', '#32CD32', '#4169E1'], // Colors for Bad, Good, Better, Best
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
      plugins: [needlePlugin], // Adding needle plugin to the chart
    });

    // Calories Donut Chart with needle
    this.caloriesChart = new Chart('caloriesCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Bad', 'Good', 'Better', 'Best'],
        datasets: [
          {
            label: 'Calories',
            data: [321, 200, 179, 100], // Example distribution for each range
            backgroundColor: ['#FF6347', '#FFD700', '#32CD32', '#4169E1'], // Colors for Bad, Good, Better, Best
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
      plugins: [needlePlugin], // Adding needle plugin to the chart
    });
  }
  
  
  
  


  currentCalories: number = 1156;
  maxCalories: number = 1500;

  goal: number = 1500;
  maxGoal: number = 1500;

  protein: number = 102;
  maxProtein: number = 150;

  fat: number = 83;
  maxFat: number = 100;
  selectedCardIndex: number | null = null;

  categories: Category[] = [];
  products: Product[] = [];
  selectedCard: any = null;

  constructor(private productService: ProductService,
    private router: Router,
    private navCtrl: NavController) {
    this.products = this.productService.getProduct();
  }


  tokens = [
    { id: 1, name: 'Fitcraft 100', eth: '8.4 ETH', usd: '$14,668' },
    { id: 2, name: 'Runcraft 300', eth: '4 ETH', usd: '$4,000' },
  ];

  isPublic: boolean = true;

  togglePublic() {
    this.isPublic = !this.isPublic;
  }

  rotateGauge(): string {
    const rotation = (this.currentCalories / this.maxCalories) * 180;
    return `rotate(${rotation}deg)`;
  }

  calculateStrokeDashOffset(value: number, maxValue: number): number {
    const maxDashOffset = 283; // 2 * PI * radius(45% of 80px)
    return maxDashOffset - (value / maxValue) * maxDashOffset;
  }



  onCardSelect(item: any, index: number) {
    if (this.selectedCardIndex === index) {
      this.selectedCardIndex = null;
      this.selectedCard = null;
    } else {
      this.selectedCardIndex = index;
      this.selectedCard = item;
    }
    this.navCtrl.navigateForward('/pages/book-product', {
      animation: navAnimation
    });
    // this.router.navigate(['/pages/book-product']);
    console.log(JSON.stringify(item), index)
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
