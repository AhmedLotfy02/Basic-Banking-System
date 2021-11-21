import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { customer } from './models/customer-model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BanKServiceService {

  
  private operationListener = new Subject<{logicError:boolean,errorSending:boolean,doneSending:boolean}>();
  private customersListener=new Subject<customer[]>();
  customers!:any;
  customer!:customer;
  servedCustomer!:customer;

  constructor(private http:HttpClient ) {
    this.http.get('http://localhost:3000/api/getCustomers').subscribe((cus:any)=>{
     this.customers=cus;
     this.customersListener.next(cus);
     console.log(this.customers);
   })
   }
   getCustomers(){
     this.http.get('http://localhost:3000/addMock').subscribe(bos=>
     {
       this.customers=bos;
     })
   }
   getCustsObser(){
     return this.customersListener.asObservable();
   }
   getCusts(){
     return this.customers;
   }
   retriveCustomer(cust:customer){
    this.customer=cust;
   }
   getCustomer(){
     return this.customer;
   }
   setServedCustomer(cust:customer){
     this.servedCustomer=cust;
   }
   getOperationListener() {
    return this.operationListener.asObservable();
  }
   transferMoney(value:number){
     const operation={
       to:this.servedCustomer,
       from:this.customer,
       date:Date.now().toString(),
       value:value,
       send:true
     }
     if(this.customer.currentBalance-value<0){
      this.operationListener.next({logicError:true,errorSending:false,doneSending:false});
       return;
     }
     this.http.post('http://localhost:3000/transfer',operation).subscribe((response:any)=>{
      this.operationListener.next({logicError:false,errorSending:false,doneSending:true});
         },(error)=>{
          this.operationListener.next({logicError:false,errorSending:true,doneSending:false});

     })
   }
}
