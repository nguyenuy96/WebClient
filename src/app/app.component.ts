import { Component } from '@angular/core';

interface User {
  username: string;
}
const user: User[] = [
  {username: 'asdas'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./components/store-view/store-page.css']
})

export class AppComponent {
  user: User;
  title = 'Babe Shop';
}
