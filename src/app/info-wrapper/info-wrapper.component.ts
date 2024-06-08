import { Component } from '@angular/core';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
    selector: 'app-info-wrapper',
    standalone: true,
    templateUrl: './info-wrapper.component.html',
    styleUrl: './info-wrapper.component.css',
    imports: [AccordionComponent]
})
export class InfoWrapperComponent {

}
