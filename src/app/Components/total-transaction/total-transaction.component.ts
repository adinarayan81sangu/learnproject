import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-transaction',
  templateUrl: './total-transaction.component.html',
  styleUrls: ['./total-transaction.component.scss']
})
export class TotalTransactionComponent implements OnInit {
  @Input() TotalData:any

  constructor() { }

  ngOnInit(): void {
  }

}
