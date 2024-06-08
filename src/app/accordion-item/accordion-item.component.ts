import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  keyboard_icon = 'keyboard_arrow_up';
  
  styles = {
    'height': '0px',
    'overflow': 'hidden',
    'visibility': 'hidden',
  }
  
  onToggle() {
    this.styles = {
      'height': this.styles['height'] === '0px' ? '' : '0px',
      'overflow': this.styles['overflow'] === 'hidden' ? '' : 'hidden',
      'visibility': this.styles['visibility'] === 'hidden' ? '' : 'hidden',
    }
    this.keyboard_icon = this.keyboard_icon === 'keyboard_arrow_up' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
  }
}
