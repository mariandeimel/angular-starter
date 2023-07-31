import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGradientOutlineComponent } from './button-gradient-outline.component';

describe('ButtonGradientOutlineComponent', () => {
  let component: ButtonGradientOutlineComponent;
  let fixture: ComponentFixture<ButtonGradientOutlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonGradientOutlineComponent]
    });
    fixture = TestBed.createComponent(ButtonGradientOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
