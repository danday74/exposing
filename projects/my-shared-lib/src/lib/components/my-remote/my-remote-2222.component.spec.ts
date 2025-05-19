import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemoteComponent } from './my-remote.component'

describe('MyRemoteComponent', () => {
  let component: MyRemoteComponent
  let fixture: ComponentFixture<MyRemoteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemoteComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemoteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
