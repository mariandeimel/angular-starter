import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { Layout } from '@core/enums/layout'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppComponent],
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have the 'angular-client' title`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.layoutService.layout()).toMatch(Layout.ADMIN.toString())
  })
})
