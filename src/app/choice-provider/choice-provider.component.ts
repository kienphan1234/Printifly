import { Component } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { OptionColorComponent } from "../option-color/option-color.component";
import { LinkComponent } from "../link/link.component";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-choice-provider',
    standalone: true,
    templateUrl: './choice-provider.component.html',
    styleUrl: './choice-provider.component.css',
    imports: [BadgeComponent, OptionColorComponent, LinkComponent, ButtonComponent]
})
export class ChoiceProviderComponent {

}
