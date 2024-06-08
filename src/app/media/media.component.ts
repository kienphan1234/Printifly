import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CarouselItemComponent } from "../carousel-item/carousel-item.component";

@Component({
    selector: 'app-media',
    standalone: true,
    templateUrl: './media.component.html',
    styleUrl: './media.component.css',
    imports: [CarouselItemComponent]
})
export class MediaComponent {

}
