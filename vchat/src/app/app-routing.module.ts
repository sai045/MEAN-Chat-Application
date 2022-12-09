import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './components/chat/chat.component';
// import { ChatHomeComponent } from './components/chat/chat-home/chat-home.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'userRegister',component:SignupComponent},
  {path:'chat',component:ChatComponent,canActivate:[AuthGuard],
   children: [
              {path:'room',component:ChatRoomComponent},
  ]}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
