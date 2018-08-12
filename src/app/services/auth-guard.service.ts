import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        )
      }
    )
  }
}
