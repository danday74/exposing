import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Load3333Component } from './load-3333.component'

describe('Load3333Component', () => {
  let component: Load3333Component
  let fixture: ComponentFixture<Load3333Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Load3333Component],
    })
      .compileComponents()

    fixture = TestBed.createComponent(Load3333Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
