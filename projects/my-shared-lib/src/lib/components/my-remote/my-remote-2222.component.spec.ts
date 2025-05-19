import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemote2222Component } from './my-remote-2222.component'

describe('MyRemote2222Component', () => {
  let component: MyRemote2222Component
  let fixture: ComponentFixture<MyRemote2222Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemote2222Component],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemote2222Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
