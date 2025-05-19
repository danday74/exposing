import { Component } from '@angular/core'
import { MyRemoteChildComponent } from './my-remote-child/my-remote-child.component'

@Component({
  selector: 'lib-my-remote',
  imports: [MyRemoteChildComponent],
  templateUrl: './my-remote.component.html',
  styleUrl: './my-remote.component.scss',
})
export class MyRemoteComponent {}
