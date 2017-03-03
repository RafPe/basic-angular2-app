import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    body { padding: 50px,50px; }
  `]
})

export class AppComponent {
    message: string = 'Hello';

}

