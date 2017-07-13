import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-component',
  template: `
    <img src="assets/photo.jpg"  class='photo' alt="">
  `,
  styles: [`
    .photo {
        width: 100%;
    } 
  `]
})
export class HomePageComponent {
}
