import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDefaultComponent } from './layout-default.component';

describe('LayoutDefaultComponent', () => {
  let component: LayoutDefaultComponent;
  let fixture: ComponentFixture<LayoutDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutDefaultComponent]
    });
    fixture = TestBed.createComponent(LayoutDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
