import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

    constructor(private authService: AuthService){}

    registerData={}

    post(){
      this.authService.registerUser(this.registerData)
  }
}
