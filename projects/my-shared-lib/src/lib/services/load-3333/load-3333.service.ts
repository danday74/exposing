import { inject, Injectable, Injector } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'
import { ModMyRemote2222Service } from '../../other/my-shared-lib-2222.other'

@Injectable({ providedIn: 'root' })
export class Load3333Service implements ModMyRemote2222Service {
  private injector: Injector = inject(Injector)
  private myRemoteService: ModMyRemote2222Service | null = null

  constructor() {
    this.injectRemoteService().then()
  }

  async hello(msg: string | null = null) {
    // service not injected in time, setTimeout delays execution to ensure it has been
    // a more advanced solution - e.g. using a BehaviourSubject - would add too much boilerplate for demo purposes
    setTimeout(() => {
      if (msg) {
        this.myRemoteService!.hello(`=> called from exposing remote 2222 Load3333Service ${msg}`)
      } else {
        this.myRemoteService!.hello('=> called from exposing remote 2222 Load3333Service')
      }
    }, 100)
  }

  private async injectRemoteService() {
    const module = await this.getRemoteModule()
    const MyRemoteService = module.MyRemote3333Service
    this.myRemoteService = this.injector.get<ModMyRemote2222Service>(MyRemoteService)
  }

  private async getRemoteModule() {
    return await loadRemoteModule({ remoteName: 'mfe-exposing-remote-3333', exposedModule: 'MySharedLib3333' })
  }
}
