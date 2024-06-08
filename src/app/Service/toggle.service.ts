import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private show = new Subject<boolean>();
  show$ = this.show.asObservable();

  constructor() { }

  toggleProperty() {
    this.show.next(true);
  }
}
