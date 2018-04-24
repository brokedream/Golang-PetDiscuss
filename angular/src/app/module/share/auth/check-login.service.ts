import { UserHelper } from './../../../helper/user';
import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if(UserHelper.Exist()==true){
        this.router.navigate(['/article'])
        return false
    }else{
        return true
    }
  }



/* . . . */
}