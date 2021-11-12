import { Component ,OnInit} from '@angular/core';
import { BanKServiceService } from './ban-kservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Banking-System';
  constructor(private bankService:BanKServiceService){
  }
  ngOnInit(){
    this.bankService.getCustomers();
  }
}
