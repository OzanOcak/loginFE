import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ApiService } from './api.service'
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile.component';

import {MatButtonModule,MatCardModule,MatToolbarModule,MatInputModule,MatListModule} from '@angular/material'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthService } from './auth.service';

const routes=[
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'users', component:UserComponent},
  {path:'profile/:id', component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
