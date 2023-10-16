import { Component } from '@angular/core';
import { IsdadterloginserviceService } from '../../../isdadterloginservice.service';

@Component({
  selector: 'app-isdafterlogin',
  templateUrl: './isdafterlogin.component.html',
  styleUrls: ['./isdafterlogin.component.css']
})
export class IsdafterloginComponent {

  planList: any;

  constructor(private eService: IsdadterloginserviceService) {}

  ngOnInit() {
    this.eService.getIsdPlans().subscribe(
      (list) => {
        this.planList = list;
      },
      (error) => {
        console.error('Error fetching plans:', error);
      }
    );
  }

}
