import { Injectable } from '@angular/core'
import { ModMyRemoteService } from '../../other/my-shared-lib.other'

@Injectable({ providedIn: 'root' })
export class MyRemoteService implements ModMyRemoteService {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MyRemoteService')
  }
}
