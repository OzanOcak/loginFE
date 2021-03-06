import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-button routerLink="/">MODC</button> 
    <button mat-button routerLink="/users">Users</button>
    <span style="flex:1 1 auto"></span>
    <button mat-button routerLink="/login" >Login</button>
    <button mat-button routerLink="/register" >Register</button>
  </mat-toolbar>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';

}
