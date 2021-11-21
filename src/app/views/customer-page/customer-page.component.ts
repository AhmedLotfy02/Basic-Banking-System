import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanKServiceService } from 'src/app/ban-kservice.service';
import { customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customer!:customer;
  constructor(private BankSerivce:BanKServiceService,private router:Router) {
    setTimeout(() => {
      this.customer=this.BankSerivce.getCustomer();
      console.log(this.customer);
    }, 100);
   }

  ngOnInit(): void {
  }
  transfer(){
    this.router.navigate(['/transfer']);
  }

}
