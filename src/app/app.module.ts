import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProtelplansComponent } from './protelplans/protelplans.component';
import { IntRoamingComponent } from './int-roaming/int-roaming.component';
import { ISDplanComponent } from './isdplan/isdplan.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { IRWiFiComponent } from './irwi-fi/irwi-fi.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PaymentHistoryComponent } from './admin-page/payment-history/payment-history.component';
import { LogsComponentComponent } from './admin-page/logs-component/logs-component.component';
import { AfterLoginNavBarComponent } from './after-login-nav-bar/after-login-nav-bar.component';
import { HomeAfterLoginComponent } from './after-login-nav-bar/home-after-login/home-after-login.component';
import { ProtelPlansAfterLoginComponent } from './after-login-nav-bar/afterloginproduct/protel-plans-after-login/protel-plans-after-login.component';
import { AfterloginproductComponent } from './after-login-nav-bar/afterloginproduct/afterloginproduct.component';
import { InFlightafterloginComponent } from './in-flightafterlogin/in-flightafterlogin.component';
import { IrwiFiafterloginComponent } from './irwi-fiafterlogin/irwi-fiafterlogin.component';
import { IsdafterloginComponent } from './after-login-nav-bar/afterloginproduct/isdafterlogin/isdafterlogin.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ProductComponentComponent,
    ProtelplansComponent,
    IntRoamingComponent,
    ISDplanComponent,
    InFlightComponent,
    IRWiFiComponent,
    RegisterComponentComponent,
    AddServicesComponent,
    AdminPageComponent,
    PaymentHistoryComponent,
    LogsComponentComponent,
    AfterLoginNavBarComponent,
    HomeAfterLoginComponent,
    ProtelPlansAfterLoginComponent,
    AfterloginproductComponent,
    InFlightafterloginComponent,
    IrwiFiafterloginComponent,
    IsdafterloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgOtpInputModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
