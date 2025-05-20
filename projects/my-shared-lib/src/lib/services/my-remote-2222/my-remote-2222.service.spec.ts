import { TestBed } from '@angular/core/testing'
import { MyRemote2222Service } from './my-remote-2222.service'

describe('MyRemote2222Service', () => {
  let service: MyRemote2222Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MyRemote2222Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
