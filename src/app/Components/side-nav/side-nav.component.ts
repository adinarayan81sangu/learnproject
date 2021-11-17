import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  visibleSidebar1:any;

  constructor(private primengconig:PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengconig.ripple=true;
  }

}
