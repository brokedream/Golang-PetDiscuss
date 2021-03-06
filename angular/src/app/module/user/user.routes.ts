import { AuthGuard } from './../share/auth/check-login.service';
import { RegisterComponent } from './components/register/register.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const userRoute:Routes=[
    {path:'',redirectTo:'login',
    pathMatch:'full'},
    {path:'login',
    canActivate:[AuthGuard],
    component:LoginComponent},
    {path:'register',
    canActivate:[AuthGuard],
    
    component:RegisterComponent}
]