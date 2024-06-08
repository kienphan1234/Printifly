import { Component } from '@angular/core';
import { InfoWrapperComponent } from "../info-wrapper/info-wrapper.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
    imports: [InfoWrapperComponent]
})
export class InfoComponent {

}
