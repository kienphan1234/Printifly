import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  firstImage = 'https://printify.com/cdn-cgi/image/width=320,quality=100,format=avif/https://images.printify.com/api/catalog/63523020339ea2ad9709f692.jpg';
  secondImage = 'https://printify.com/cdn-cgi/image/width=520,quality=100,format=avif/https://images.printify.com/api/catalog/62d66a1a35154d9068013c66';
  currentImage = this.firstImage;

  changeImage() {
    this.currentImage = this.secondImage;
  }

  restoreImage() {
    this.currentImage = this.firstImage;
  }
}
