import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-link',
    standalone: true,
    templateUrl: './link.component.html',
    styleUrl: './link.component.css',
    imports: [ButtonComponent]
})
export class LinkComponent {

}
