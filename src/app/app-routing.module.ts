import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './views/customers/customers.component';
import { HeaderComponent } from './views/Home-Page/header/header.component';
import { HomeComponent } from './views/Home-Page/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},{path:'customers',component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
