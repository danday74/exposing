import { TestBed } from '@angular/core/testing'
import { Load3333Service } from './load-3333.service'

describe('Load3333Service', () => {
  let service: Load3333Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(Load3333Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
