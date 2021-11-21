import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BanKServiceService } from 'src/app/ban-kservice.service';
import { customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {
  customers!:any;
  recentcustomer!:customer;
  spinnerLoading=true;
  constructor(private BankService:BanKServiceService) {
    
    
  
   }
   currentPage=false;
   wrongInput=false ;
   value=0;
   logicError=false;
   errorSend=false;
   donesending=false;
   transferListener!: Subscription;
  ngOnInit(): void {
    this.BankService.getCustsObser().subscribe((cus)=>{
      this.customers=cus;
      console.log(this.customers);
      this.recentcustomer=this.BankService.getCustomer();
      this.spinnerLoading=false;
    })
    this.transferListener=this.BankService.getOperationListener().subscribe((response)=>{
        this.errorSend=response.errorSending;
        this.donesending=response.doneSending;
        this.logicError=response.logicError;
    })
   
  }

  select(customer:customer){
    this.BankService.setServedCustomer(customer);
    this.currentPage=true;
  }
  transfer(){
    this.BankService.transferMoney(this.value);
  }
}
