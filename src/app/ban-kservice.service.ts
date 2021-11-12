import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { customer } from './models/customer-model';
@Injectable({
  providedIn: 'root'
})
export class BanKServiceService {

  customers!:any;

  constructor(private http:HttpClient ) {
    this.http.get('http://localhost:3000/api/getCustomers').subscribe((cus:any)=>{
     this.customers=cus;
   })
   }
   getCustomers(){
     this.http.get('http://localhost:3000/addMock').subscribe(bos=>
     {
       this.customers=bos;
     })
   }
   getCusts(){
     return this.customers;
   }

}
