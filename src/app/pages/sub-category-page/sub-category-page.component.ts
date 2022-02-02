import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeIcons} from 'primeng/api';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-sub-category-page',
  templateUrl: './sub-category-page.component.html',
  styleUrls: ['./sub-category-page.component.scss']
})
export class SubCategoryPageComponent implements OnInit {

  constructor(
     private _route:ActivatedRoute,
     private _state: StateService,
     private _api: ApiService
     ) { }
  howWeWork!: any[];
  img: string = ""
  pageData!: any
  pagecode!: string

 
      ngOnInit(): void {
       this.pagecode = this._route.snapshot.paramMap.get('code')
      // console.log("pagecode",this.pagecode) 
        this._api._getSubCategoryContentById_API(this.pagecode).subscribe(res=>{
       // console.log("pageData",res)
        this.pageData = res 
        this.img = `url(${res.image_url})`
      })

      this.howWeWork = [
        {status: 'Select Service', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
        {status: 'Check for available provider', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
        {status: 'Select your provider', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
        {status: 'Pickup or home service within 30min', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
        {status: 'Get your work done', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
        {status: 'Done the payment', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
  }

  onBookingProceed(){
       
  }



}
