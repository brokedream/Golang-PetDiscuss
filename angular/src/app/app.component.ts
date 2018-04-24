import { UserHelper } from './helper/user';
import { Component } from '@angular/core';

@Component({
  selector: 'play-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
login:boolean
constructor(){
  this.login=UserHelper.Exist()
}
logout(){
  UserHelper.RemoveUser()
  location.reload()
}
}
