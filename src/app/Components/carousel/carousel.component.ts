import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/Services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel1:any;
  responsiveOptions:any;
constructor( public carosule:CarouselService) { 
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}

ngOnInit(): void {
  this.carosule.getCarouselData().subscribe((res)=>{
    this.carousel1=res;
    // console.log("tttttttttttttttttttttttt")
    console.log(this.carousel1);
  })
}

}
