import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/Home-Page/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BodyComponent } from './views/Home-Page/body/body.component';
import { HomeComponent } from './views/Home-Page/home/home.component';
import { CustomersComponent } from './views/customers/customers.component';
import { CustomerPageComponent } from './views/customer-page/customer-page.component';
import { FooterComponent } from './views/Home-Page/footer/footer.component';
import { TransferPageComponent } from './views/transfer-page/transfer-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    CustomersComponent,
    CustomerPageComponent,
    FooterComponent,
    TransferPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
