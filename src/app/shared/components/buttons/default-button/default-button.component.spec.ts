import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultButtonComponent } from './default-button.component'

describe('DefaultButtonComponent', () => {
  let component: DefaultButtonComponent
  let fixture: ComponentFixture<DefaultButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultButtonComponent],
    })
    fixture = TestBed.createComponent(DefaultButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
