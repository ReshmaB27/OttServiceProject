import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../adminservice.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  payList: any;

  constructor(private eService: AdminserviceService) {}

  ngOnInit() {
    this.eService.paymentHistory().subscribe(
      (list) => {
        this.payList = list;
      },
      (error) => {
        console.error('Error fetching payment history:', error);
      }
    );
  }
}
