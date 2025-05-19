import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemoteChildComponent } from './my-remote-child.component'

describe('MyRemoteChildComponent', () => {
  let component: MyRemoteChildComponent
  let fixture: ComponentFixture<MyRemoteChildComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemoteChildComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemoteChildComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
