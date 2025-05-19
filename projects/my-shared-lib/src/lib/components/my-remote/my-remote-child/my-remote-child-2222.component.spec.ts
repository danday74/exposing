import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemoteChild2222Component } from './my-remote-child-2222.component'

describe('MyRemoteChild2222Component', () => {
  let component: MyRemoteChild2222Component
  let fixture: ComponentFixture<MyRemoteChild2222Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemoteChild2222Component],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemoteChild2222Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
