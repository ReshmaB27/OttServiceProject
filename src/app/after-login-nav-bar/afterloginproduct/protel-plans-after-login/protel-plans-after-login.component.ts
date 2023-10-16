import { Component, OnInit } from '@angular/core';
import { OttloginafterserviceService } from 'src/app/ottloginafterservice.service';

@Component({
  selector: 'app-protel-plans-after-login',
  templateUrl: './protel-plans-after-login.component.html',
  styleUrls: ['./protel-plans-after-login.component.css']
})
export class ProtelPlansAfterLoginComponent implements OnInit {

  planList: any[] = [];
  plans299: any[] = [];
  plans399: any[] = [];
  plans499: any[] = [];
  plans599: any[] = [];
  plans999: any[] = [];
  plans1499: any[] = [];

  constructor(private eService: OttloginafterserviceService) {}

  ngOnInit() {
    this.eService.getOttPlans().subscribe(
      (list:any) => {
        this.plans599 = list.filter((plan: { price: string; }) => plan.price === '599');
        this.plans999 = list.filter((plan: { price: string; }) => plan.price === '999');
        this.plans1499 = list.filter((plan: { price: string; }) => plan.price === '1499');
        this.plans299 = list.filter((plan: { price: string; }) => plan.price === '299');
        this.plans399 = list.filter((plan: { price: string; }) => plan.price === '399');
        this.plans499 = list.filter((plan: { price: string; }) => plan.price === '499');

        this.planList = this.plans1499;
      },
      (error) => {
        console.error('Error fetching plans:', error);
      }
    );
  }
}
