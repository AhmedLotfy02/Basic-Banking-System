import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './views/customer-page/customer-page.component';
import { CustomersComponent } from './views/customers/customers.component';
import { HeaderComponent } from './views/Home-Page/header/header.component';
import { HomeComponent } from './views/Home-Page/home/home.component';
import { TransferPageComponent } from './views/transfer-page/transfer-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},{path:'customers',component:CustomersComponent},{path:'customer',component:CustomerPageComponent}
,{path:'transfer',component:TransferPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
