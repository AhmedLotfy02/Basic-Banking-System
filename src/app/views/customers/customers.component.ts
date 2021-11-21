import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanKServiceService } from 'src/app/ban-kservice.service';
import { customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers!:any;
  constructor(private BankService:BanKServiceService,private router:Router) { 
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.customers=this.BankService.getCusts();
    console.log(this.customers);
    }, 500);
  }
  async goto(customer:any) {
   await this.BankService.retriveCustomer(customer);
   await this.router.navigate(['/customer']);
  }
}
