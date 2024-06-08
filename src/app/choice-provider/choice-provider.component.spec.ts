import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceProviderComponent } from './choice-provider.component';

describe('ChoiceProviderComponent', () => {
  let component: ChoiceProviderComponent;
  let fixture: ComponentFixture<ChoiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
