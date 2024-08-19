import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {
  @ViewChild('video1', { static: false }) video1!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2', { static: false }) video2!: ElementRef<HTMLVideoElement>;
  @ViewChild('video3', { static: false }) video3!: ElementRef<HTMLVideoElement>;

  showPlayButton: boolean = true;
  status: number = 1;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  playVideo() {
    this.showPlayButton = false;
    this.cdr.detectChanges(); // Ensure Angular has updated the view
    const videoElement = this.getCurrentVideoElement();
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }

  nextSlide() {
    this.status++;
    this.cdr.detectChanges(); // Update the view with the new video element
    const videoElement = this.getCurrentVideoElement();
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error('Error playing video:', error);
      });
    } else {
      this.router.navigate(['/login']); // Navigate if no video is found
    }
  }

  private getCurrentVideoElement(): HTMLVideoElement | null {
    switch (this.status) {
      case 1:
        return this.video1 ? this.video1.nativeElement : null;
      case 2:
        return this.video2 ? this.video2.nativeElement : null;
      case 3:
        return this.video3 ? this.video3.nativeElement : null;
      default:
        return null;
    }
  }
}
