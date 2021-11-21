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
  constructor(private BankService:BanKServiceService) {
    
    
    setTimeout(() => {
      this.recentcustomer=this.BankService.getCustomer();
      this.customers=this.BankService.getCusts();
      console.log(this.customers)
    }, 500);
   }
   currentPage=false;
   wrongInput=false ;
   value=0;
   logicError=false;
   errorSend=false;
   donesending=false;
   transferListener!: Subscription;
  ngOnInit(): void {
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
