import { Component, OnInit } from '@angular/core';
import { BanKServiceService } from 'src/app/ban-kservice.service';
import { customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers!:any;
  constructor(private BankService:BanKServiceService) { 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.customers=this.BankService.getCusts();
    console.log(this.customers);
    }, 500);
  }
  goto(customer:any){
    console.log(customer);
  }
}
