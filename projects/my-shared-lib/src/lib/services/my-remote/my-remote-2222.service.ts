import { Injectable } from '@angular/core'
import { ModMyRemote2222Service } from '../../other/my-shared-lib.other'

@Injectable({ providedIn: 'root' })
export class MyRemote2222Service implements ModMyRemote2222Service {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MyRemote2222Service')
  }
}
