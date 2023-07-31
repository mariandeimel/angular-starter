import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTableComponent } from './content-table.component';

describe('ContentTableComponent', () => {
  let component: ContentTableComponent;
  let fixture: ComponentFixture<ContentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentTableComponent]
    });
    fixture = TestBed.createComponent(ContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
