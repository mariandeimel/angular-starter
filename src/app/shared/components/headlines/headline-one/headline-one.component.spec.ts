import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineOneComponent } from './headline-one.component';

describe('HeadlineOneComponent', () => {
  let component: HeadlineOneComponent;
  let fixture: ComponentFixture<HeadlineOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeadlineOneComponent]
    });
    fixture = TestBed.createComponent(HeadlineOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
