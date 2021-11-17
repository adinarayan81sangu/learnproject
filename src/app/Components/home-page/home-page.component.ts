import { Component, OnInit } from '@angular/core';
import { TransactionDataService } from 'src/app/Services/transaction-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ToatalTransactons:any;
  FaildTransactons:any;
  SuccessTransactons:any;

  constructor(public Tdata:TransactionDataService) { }

  ngOnInit(): void {
    this.Tdata.getAllData().subscribe((res)=>{
      this.ToatalTransactons=res;
    });
    this.Tdata.FaildData().subscribe((res)=>{
      this.FaildTransactons=res;
    });
    this.Tdata.SuccessData().subscribe((res)=>{
       this.SuccessTransactons=res;
      // console.log(this.SuccessTransactons);
    });
   
  }

}
