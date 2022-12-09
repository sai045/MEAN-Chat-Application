import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';


// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';



import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {SocketService} from '../app/services/socket.service';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './auth.guard';
import { ChatComponent } from './components/chat/chat.component';
import { ChatHomeComponent } from './components/chat/chat-home/chat-home.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ChatComponent,
    ChatHomeComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // AngularFontAwesomeModule 
    // SocketIoModule.forRoot()
    
  
   
    
   
    

  ],
  providers: [AuthGuard,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
