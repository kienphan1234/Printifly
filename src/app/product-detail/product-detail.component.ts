import { Component } from '@angular/core';
import { ChoiceComponent } from "../choice/choice.component";
import { MediaComponent } from "../media/media.component";
import { InfoComponent } from "../info/info.component";

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [ChoiceComponent, MediaComponent, InfoComponent]
})
export class ProductDetailComponent {

}
