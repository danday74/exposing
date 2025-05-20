import { Component } from '@angular/core'
import { Load3333Component, MyRemote2222Component } from 'my-shared-lib-2222'

@Component({
  selector: 'app-example',
  imports: [MyRemote2222Component, Load3333Component],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {}
