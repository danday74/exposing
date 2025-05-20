import { AfterViewInit, Component, inject, Injector, signal, viewChild, ViewContainerRef, WritableSignal } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/native-federation'

@Component({
  selector: 'lib-load-3333',
  imports: [],
  templateUrl: './load-3333.component.html',
  styleUrl: './load-3333.component.scss',
})
export class Load3333Component implements AfterViewInit {
  private vc = viewChild('vc', { read: ViewContainerRef })

  private injector: Injector = inject(Injector)

  success: WritableSignal<boolean | null> = signal(null)

  ngAfterViewInit() {
    this.createRemoteComponent().then()
  }

  private async createRemoteComponent() {
    const module = await this.getRemoteModule()
    if (module) {
      this.success.set(true)
      const MyRemoteComponent = module.MyRemote3333Component
      this.vc()!.createComponent(MyRemoteComponent, { injector: this.injector })
    } else {
      this.success.set(false)
    }
  }

  private async getRemoteModule() {
    try {
      return await loadRemoteModule({ remoteName: 'mfe-exposing-remote-3333', exposedModule: 'MySharedLib3333' })
    } catch (err) {
      console.warn(err)
      return null
    }
  }
}
