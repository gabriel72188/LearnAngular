import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
      Username: {{ username }}
    `,
  })
  export class UserComponent {
    @Input() username = 'kk';
  }