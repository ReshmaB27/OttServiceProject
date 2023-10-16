import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProtelplansComponent } from './protelplans/protelplans.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { IntRoamingComponent } from './int-roaming/int-roaming.component';
import { ISDplanComponent } from './isdplan/isdplan.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { IRWiFiComponent } from './irwi-fi/irwi-fi.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PaymentHistoryComponent } from './admin-page/payment-history/payment-history.component';
import { LogsComponentComponent } from './admin-page/logs-component/logs-component.component';
import { HomeAfterLoginComponent } from './after-login-nav-bar/home-after-login/home-after-login.component';
import { ProtelPlansAfterLoginComponent } from './after-login-nav-bar/afterloginproduct/protel-plans-after-login/protel-plans-after-login.component';
import { IsdafterloginComponent } from './after-login-nav-bar/afterloginproduct/isdafterlogin/isdafterlogin.component';
import { InFlightafterloginComponent } from './in-flightafterlogin/in-flightafterlogin.component';
import { IrwiFiafterloginComponent } from './irwi-fiafterlogin/irwi-fiafterlogin.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponentComponent
  },
  {
    path:'reg',
    component:RegisterComponentComponent
  },
  {
    path:'login',
    component:LoginComponentComponent
  },
  {
    path:'product',
    component:ProductComponentComponent,
  },
  {
    path:'addservice',
    component:AddServicesComponent
  },
  {
    path:'ott',
    component:ProtelplansComponent
  },
  {
    path:'introam',
    component:IntRoamingComponent
  },
  {
    path:'isd',
    component:ISDplanComponent
  },
  {
    path:'inflight',
    component:InFlightComponent
  },
  {
    path:'irwifi',
    component:IRWiFiComponent
  },
  {
    path:'admin',
    component:AdminPageComponent
  },
  {
    path:'adminhome',
    component:AdminPageComponent
  },
  {
    path:'payhistory',
    component:PaymentHistoryComponent
  },
  {
    path:'logs',
    component:LogsComponentComponent
  },
  {
    path:'loginhome',
    component:HomeAfterLoginComponent
  },
  {
    path:'ottafterlogin',
    component:ProtelPlansAfterLoginComponent
  },
  {
    path:'isdafterlogin',
    component:IsdafterloginComponent
  },
  {
    path:'inflightafterlogin',
    component:InFlightafterloginComponent
  },
  {
    path:'irwifiafterlogin',
    component:IrwiFiafterloginComponent
  },
  {
    path:'**',
    component:HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
