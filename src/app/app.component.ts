import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCfP9ryclQyjCmu7h0B7ptprWNyJmD22SY",
      authDomain: "bookshelves-188ef.firebaseapp.com",
      databaseURL: "https://bookshelves-188ef.firebaseio.com",
      projectId: "bookshelves-188ef",
      storageBucket: "bookshelves-188ef.appspot.com",
      messagingSenderId: "608108421103"
    };
    firebase.initializeApp(config);
  }
}
