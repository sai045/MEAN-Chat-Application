import { Injectable } from '@angular/core';

 import {io}  from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket:any;

  user=sessionStorage.getItem('username'); 
  _url='http://localhost:3000?username=';

  constructor() { 
    console.log('From socket service-',this.user);
    this.socket = io(this._url+this.user,{ transports: ['websocket', 'polling', 'flashsocket'] });
  }

  listen(eventName:string){
    return new Observable((subscribe) =>
    {
      this.socket.on(eventName,(data:any) => {
        subscribe.next(data);
      })
    });
  }

  emit(eventName:string,data:any){
    this.socket.emit(eventName,data);
  }
}
