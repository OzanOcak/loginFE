import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
  <mat-card>
   <mat-card-header>
     <mat-card-title>
        <h4>Login : </h4>
      </mat-card-title>
   </mat-card-header>
   <mat-card-content>
    <form>
     <mat-input-container>
      <input [(ngModel)]="loginData.email"  name="email" matInput placeholder="email" >
     </mat-input-container>
     <mat-input-container>
      <input [(ngModel)]="loginData.pwd"  name="password" matInput placeholder="password" >
     </mat-input-container>
     <button (click)="post()" mat-raised-button color="primary">login</button>
    </form>
   </mat-card-content>
  </mat-card>
  `
})
export class LoginComponent {

    constructor(private authService: AuthService){}

    loginData={}

    post(){
      this.authService.loginUser(this.loginData)
  }
}
