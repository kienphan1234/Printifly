import { Component } from '@angular/core';
import { ChoiceProviderComponent } from "../choice-provider/choice-provider.component";

@Component({
    selector: 'app-choice',
    standalone: true,
    templateUrl: './choice.component.html',
    styleUrl: './choice.component.css',
    imports: [ChoiceProviderComponent]
})
export class ChoiceComponent {

}
