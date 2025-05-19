import { Component } from '@angular/core'
import { MyRemote2222Component } from 'my-shared-lib'

@Component({
  selector: 'app-example',
  imports: [MyRemote2222Component],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {}
